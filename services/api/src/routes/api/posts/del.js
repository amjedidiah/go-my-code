// Mongoose model imports
const Posts = require('../../../models/Posts');

// Module export
module.exports = (req, res) =>
  Posts.updateMany({isDeleted: false}, {isDeleted: true})
      .then(async () =>
        res.status(200).send({
          data: [],
          message: 'All posts deleted successfully',
          error: false,
        }),
      )
      .catch((err) =>
        res.status(500).send({
          data: null,
          message: err || 'Internal server error',
          error: true,
        }),
      );
