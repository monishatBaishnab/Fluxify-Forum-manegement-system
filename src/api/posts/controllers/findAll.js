const Post = require("../../../models/posts");

const findAll = async (req, res, next) => {
    try {
        const filterObj = {};

        const tag = req.query.tag;
        const offset = parseInt(req.query.offset);
        const page = parseInt(req.query.page);
        const sort = req.query.sort;

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

        // Stage 3: Perform the actual query and populate user data
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
            { $skip: offset * (page - 1) },
            { $limit: offset },
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
            }

        )
        
        if (!sort) {
            pipeline.push(
                {   
                    $sort: {time: 1}
                },
            )
        }else{
            pipeline.push(
                {
                    $sort: {voteDifference: -1}
                }
            )
        }

        // Execute the final aggregation pipeline
        const finalResult = await Post.aggregate(pipeline);

        res.send({ data: finalResult, count });
    } catch (error) {
        next(error);
    }
}

module.exports = findAll;