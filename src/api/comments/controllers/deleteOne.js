const deleteOne = async (req, res, next) => {
    try {
        const commentId = req.params.id;

        const result = await Comment.deleteOne({_id: commentId});
        res.send(result);
    } catch (error) {
        next(error);
    }
};

module.exports = deleteOne;