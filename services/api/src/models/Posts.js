// Module imports
const mongoose = require('mongoose');

// Mongoose Schema
const { Schema } = mongoose;

// Mongoose User Schema
const PostsSchema = new Schema(
  {
    id: Number,
    title: String,
    points: Number,
    user: String,
    time: Number,
    time_ago: String,
    comments_count: Number,
    type: {
      type: String,
      enum: ['ask', 'job', 'link']
    },
    url: String,
    domain: String,
    isDeleted: {
      default: false,
      type: Boolean
    }
  },
  {
    timestamps: true
  }
);

PostsSchema.methods.generateJWT = () => {
  const today = new Date();
  const expirationDate = new Date(today);
  expirationDate.setDate(today.getDate() + 60);

  return jwt.sign(
    {
      _id: this._id,
      exp: parseInt(expirationDate.getTime() / 1000, 10)
    },
    'secret'
  );
};

PostsSchema.methods.toAuthJSON = () => ({
  _id: this._id,
  id: this.id,
  title: this.title,
  points: this.points,
  user: this.user,
  time: this.time,
  time_ago: this.time_ago,
  comments_count: this.comments_count,
  type: this.type,
  url: this.url,
  domain: this.domain
});

// Export Schema Model
module.exports = mongoose.model('Posts', PostsSchema);
