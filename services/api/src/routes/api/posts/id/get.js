// Mongoose model imports
const Posts = require('../../../../models/Posts');

// Module export
module.exports = async (req, res) => {
  const { id } = req.params;

  return Posts.find({ isDeleted: false, id })
    .then(([data]) =>
      data
        ? res.status(200).send({
            data,
            message: 'Post fetched successfully',
            error: false
          })
        : res.status(404).send({
            data: null,
            message: `No post found for this id: ${id}`,
            error: true
          })
    )
    .catch((err) =>
      res.status(500).send({
        data: null,
        message: err || 'Internal server error',
        error: true
      })
    );
};
