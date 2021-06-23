// Mongoose model imports
const Posts = require('../../../../models/Posts');

// Module export
module.exports = (req, res) => {
  const { id } = req.params;

  const data = null;
  const error = true;

  // Required fields
  if (!id) {
    return res.status(400).send({
      data,
      message: 'A post id is required',
      error
    });
  }

  // Check if post exists
  Posts.find({ isDeleted: false })
    .then((posts) => {
      const found = posts.find((p) => p.id == id);

      if (!found) {
        return res.status(404).send({
          data,
          message: `Post with id: ${id} not found`,
          error
        });
      }

      return Posts.updateOne({ isDeleted: false, id }, { isDeleted: true })
        .then(async () =>
          res.status(200).send({
            data: found,
            message: 'Post deleted successfully',
            error: false
          })
        )
        .catch((err) =>
          res.status(500).send({
            data,
            message: err || 'Internal server error',
            error
          })
        );
    })
    .catch((err) =>
      res.status(500).send({
        data,
        message: err || 'Internal server error',
        error
      })
    );
};
