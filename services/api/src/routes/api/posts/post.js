/* eslint-disable camelcase */
// Mongoose model imports
const Posts = require('../../../models/Posts');

// Module export
module.exports = (req, res) => {
  const post = req.body;
  const {id, title, user, type} = post;

  const data = null;
  const error = true;

  // Required fields
  if (!id || !title || !type) {
    return res.status(400).send({
      data,
      message: `id, title and type are required for post with title:
      ${title} by user: ${user}`,
      error,
    });
  }

  // Required fields
  if (!['ask', 'job', 'link'].includes(type)) {
    return res.status(408).send({
      data,
      message: 'Post type is invalid',
      error,
    });
  }

  // Check if post already exists
  Posts.find({isDeleted: false})
      .then((posts) => {
        const found = posts.find((p) => p.user === user && p.title === title);

        if (found) {
          return res.status(409).send({
            data,
            message: 'A post like this already exists',
            error,
          });
        }

        const finalPost = new Posts(post);

        // Save post && return response
        return finalPost
            .save()
            .then(async () =>
              res.status(201).send({
                data: [...posts, finalPost],
                message: 'Post added successfully',
                error: false,
              }),
            )
            .catch((err) =>
              res.status(500).send({
                data,
                message: err || 'Internal server error',
                error,
              }),
            );
      })
      .catch((err) =>
        res.status(500).send({
          data,
          message: err || 'Internal server error',
          error,
        }),
      );
};
