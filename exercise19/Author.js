const Post = require("./Post");

class Author {
	constructor(name) {
		this.name = name;
		this.posts = [];
	}

	createPost(content) {
		const post = new Post(this, content);
		this.posts.push(post);
		return post;
	}
}

module.exports = Author;
