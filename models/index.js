const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

User.hasMany(Post, {
  foreignKey: 'userID'
});

Post.belongsTo(User, {
  foreignKey: 'userID',
  onDelete: 'CASCADE'
});

Comment.belongsTo(User, {
  foreignKey: 'userID',
  onDelete: 'CASCADE'
});

Post.hasMany(Comment, {
  foreignKey: 'postID',
  onDelete: 'CASCADE'
})

Comment.belongsTo(Post, {
  foreignKey: 'postID',
  onDelete: 'CASCADE'
});

module.exports = { User, Post };
