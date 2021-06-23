/* eslint-disable camelcase */
// Mongoose model imports
const Posts = require('../../../models/Posts');

// Module export
module.exports = (req, res, allPosts) => {
  const posts = (req && req.body) || allPosts;
  const data = null;
  const error = true;
  let resp = null;

  for (let i = 0; i < posts.length; i++) {
    const post = posts[i];
    const {id, title, user, type} = post;

    // Required fields
    if (!id || !title || !type) {
      resp = {
        data,
        message: `id, title and type are required for post with title:
        ${title} by user: ${user}`,
        error,
      };

      return res ? res.status(400).send(resp) : console.log(resp);
    }

    // Required fields
    if (!['ask', 'job', 'link'].includes(type)) {
      resp = {
        data,
        message: `Post type is invalid for post
        with title: ${title} by user: ${user}`,
        error,
      };

      return res ? res.status(401).send(resp) : console.log(resp);
    }
  }

  // Check if post already exists
  Posts.find({isDeleted: false})
      .then((p) => {
        const found = p.find(
            (it) => it.user === posts[0].user && it.title === posts[0].title,
        );

        if (found) {
          resp = {
            data,
            message: 'All posts have already been added',
            error: false,
          };

          return res ? res.status(409).send(resp) : console.log(resp);
        }

        // Insert all posts
        return Posts.insertMany(posts)
            .then(async (d) => {
              resp = {
                data: d,
                message: 'Posts added successfully',
                error: false,
              };

              return res ? res.status(201).send(resp) : console.log(resp);
            })
            .catch((err) => {
              resp = {
                data,
                message: err || 'Internal server error',
                error,
              };

              return res ? res.status(500).send(resp) : console.log(resp);
            });
      })
      .catch((err) => {
        resp = {
          data,
          message: err || 'Internal server error',
          error,
        };

        return res ? res.status(500).send(resp) : console.log(resp);
      });
};
