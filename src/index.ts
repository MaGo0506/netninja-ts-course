//----------
// interfaces
//----------

interface Author {
    name: string,
    avatar: string
}

const authorOne: Author = {
    name: 'Luffy',
    avatar: '/img/luffy.png'
}

interface Post {
    title: string,
    body: string,
    tags: string[]
    created_at: Date,
    author: Author
}

const newPost: Post = {
    title: 'How to become a pirate',
    body: 'Guide on how to sail the Grand Line',
    tags: ['pirates', 'anime', 'sea'],
    created_at: new Date(),
    author: authorOne
}

console.log(newPost);

//----------
// as function argument types
//----------

function createPost(post: Post): void {
    console.log(`
    |------------------------------------------------|
     Created post ${post.title} by ${post.author.name}
    |------------------------------------------------|
    `);
}

createPost(newPost)

//----------
// with arrays
//----------

let posts: Post[] = []

posts.push(newPost)

console.log(posts);

