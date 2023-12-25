const Post = require("../../../models/posts");

const findAll = async (req, res, next) => {
    try {
        const tag = req.query.tag;
        const offset = parseInt(req.query.offset);
        const page = parseInt(req.query.page);
        const sort = req.query.sort;
        const email = req.query.email;

        const pipeline = [];
        const countPipeline = [];

        // Stage 1: Match by tag (case-insensitive)
        if (tag && tag !== 'undefined') {
            countPipeline.push({
                $match: { tags: { $regex: new RegExp(tag, 'i') } }
            })
            pipeline.push({
                $match: { tags: { $regex: new RegExp(tag, 'i') } }
            })
        }

        // Stage 2: Count the matching documents
        countPipeline.push({
            $group: {
                _id: null,
                count: { $sum: 1 }
            }
        })

        // Execute the aggregation pipeline
        const countResult = await Post.aggregate(countPipeline);
        // Extract the count value from the result
        const count = countResult.length > 0 ? countResult[0].count : 0;

        if (!sort || sort === 'undefined' || sort === 'defult') {
            pipeline.push(
                {
                    $sort: { time: -1 }
                },
            )
        }

        pipeline.push(
            {
                $addFields: {
                    voteDifference: {
                        $subtract: [
                            { $size: { $ifNull: ['$upvote', []] } },
                            { $size: { $ifNull: ['$downvote', []] } }
                        ]
                    }
                }
            },
            {
                $project: {
                    title: 1,
                    tags: 1,
                    upvote: 1,
                    downvote: 1,
                    time: 1,
                    user: 1,
                    image: 1,
                    voteDifference: 1,
                }
            },
            {
                $lookup: {
                    from: 'users',
                    localField: 'user',
                    foreignField: '_id',
                    as: 'user'
                }
            },
            {
                $unwind: '$user'
            },
            {
                $lookup: {
                    from: 'comments',
                    localField: '_id',
                    foreignField: 'post',
                    as: 'comments'
                }
            }
        )

        if (sort === 'popularity') {
            pipeline.push(
                {
                    $sort: { voteDifference: -1 }
                }
            )
        }

        if (offset && page) {
            pipeline.push(
                { $skip: offset * (page - 1) },
                { $limit: offset }
            )
        }


        if (email) {
            pipeline.push({
                $match: { "user.email": email }
            })
        }

        // Execute the final aggregation pipeline
        const finalResult = await Post.aggregate(pipeline);

        res.send({ data: finalResult, count });
    } catch (error) {
        next(error);
    }
}

module.exports = findAll;