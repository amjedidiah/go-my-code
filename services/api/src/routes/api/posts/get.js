// Mongoose model imports
const Posts = require('../../../models/Posts');

// Module export
module.exports = async (req, res) =>
  Posts.find({isDeleted: false})
      .then((data) =>
      data.length > 0 ?
        res.status(200).send({
          data,
          message: 'Posts fetched successfully',
          error: false,
        }) :
        res.status(404).send({
          data: null,
          message: 'No post found',
          error: true,
        }),
      )
      .catch((err) =>
        res.status(500).send({
          data: null,
          message: err || 'Internal server error',
          error: true,
        }),
      );
