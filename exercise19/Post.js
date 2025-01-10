const Comment = require("./Comment");

class Post {
	constructor(author, content) {
		this.author = author;
		this.content = content;
		this.comments = [];
	}

	addComment(author, commentContent) {
		this.comments.push(new Comment(this, author, commentContent));
	}
}

module.exports = Post;
