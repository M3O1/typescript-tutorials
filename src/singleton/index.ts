import {Blog} from "./blog";

async function main() {
    const blog = new Blog()
    await blog.initialize()
    const posts = await blog.getAllPosts()

    if (posts.length == 0) {
        console.log("No post available.")
    }

    for (const post of posts) {
        console.log(post.id, post.title, post.content, post.created_at)
    }
}