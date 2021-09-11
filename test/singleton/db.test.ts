import {Blog} from "../../src/singleton/blog";
import {Post} from "../../src/singleton/Post";
import {createDB} from "../../src/singleton/db";

describe("데이터베이스 설계 테스트", () => {
    const db = createDB()
    const blog = new Blog(db);

    beforeAll(async () => {
        await blog.initialize()
        await blog.deleteAll()
    })

    afterEach(async () => {
        await blog.deleteAll()
    })

    it("처음에는 아무것도 없다.", async () => {
        const allPosts = await blog.getAllPosts()

        expect(allPosts.length).toBe(0)
    })

    it("행을 1개 생성하면, 1개가 저장된다.", async () => {
        const givenPost = new Post("1", "hello", "hieveryone")

        await blog.createPost(givenPost)
        const allPosts = await blog.getAllPosts()

        expect(allPosts.length).toBe(1)

        expect(givenPost.id).toBe(allPosts[0].id)
        expect(givenPost.title).toBe(allPosts[0].title)
        expect(givenPost.content).toBe(allPosts[0].content)
    })

    it("행을 2개 생성하면, 2개가 저장된다.", async () => {
        await blog.createPost(new Post("1", "안녕", "반가워요 모두들"))
        await blog.createPost(new Post("2", "훈훈", "훈훈하다훈훈해"))
        const allPosts = await blog.getAllPosts()

        expect(allPosts.length).toBe(2)
    })

    it("행을 2개 생성 후, 1개를 삭제하면 1개가 저장된다.", async () => {
        const givenPost = new Post("1", "안녕", "반가워요 모두들")
        await blog.createPost(givenPost)
        await blog.createPost(new Post("2", "훈훈", "훈훈하다훈훈해"))
        await blog.deletePost("2")

        const allPosts = await blog.getAllPosts()

        expect(allPosts.length).toBe(1)

        expect(givenPost.id).toBe(allPosts[0].id)
        expect(givenPost.title).toBe(allPosts[0].title)
        expect(givenPost.content).toBe(allPosts[0].content)

    })
})
