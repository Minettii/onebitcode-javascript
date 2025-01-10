const Author = require("./Author");

const autor1 = new Author("Aaaa");
const autor2 = new Author("Cccc");

const post1 = autor1.createPost("Batata frita");
const post2 = autor1.createPost("X-burguer");
const post3 = autor2.createPost("Arroz");

post1.addComment(autor1, "ketchup");
post1.addComment(autor1, "mayo");
post2.addComment(autor1, "salada");
post3.addComment(autor1, "feijão");

console.log(autor1);
console.log(autor2);
console.log(post1);
console.log(post2);
console.log(post3);
console.log(post1.comments);
console.log(post2.comments);
console.log(post3.comments);
