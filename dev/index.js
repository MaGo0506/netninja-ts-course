"use strict";
//----------
// interfaces
//----------
const authorOne = {
    name: 'Luffy',
    avatar: '/img/luffy.png'
};
const newPost = {
    title: 'How to become a pirate',
    body: 'Guide on how to sail the Grand Line',
    tags: ['pirates', 'anime', 'sea'],
    created_at: new Date(),
    author: authorOne
};
console.log(newPost);
//----------
// as function argument types
//----------
function createPost(post) {
    console.log(`
    |------------------------------------------------|
     Created post ${post.title} by ${post.author.name}
    |------------------------------------------------|
    `);
}
createPost(newPost);
//----------
// with arrays
//----------
let posts = [];
posts.push(newPost);
console.log(posts);
