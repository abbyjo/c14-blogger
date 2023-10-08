const User = require('./User');
const Comment = require('./Comment');
const Post = require('./Post');


User.hasMany(Post,{
    foreignKey: 'author_id'
});

Post.belongsTo(User, {
    foreignKey: 'author_id'
});

Post.hasMany(Comment, {
    foreignKey: 'comment_id',
    onDelete: 'CASCADE'
});

Comment.belongsTo(Post, {
    foreignKey: 'comment_id'
});

Comment.hasOne(User, {
    foreignKey: 'author_id'
});

User.hasMany(Comment, {
    foreignKey: 'author_id'
})



module.exports = { Comment, User, Post }