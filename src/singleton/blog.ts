import {promisify} from 'util'
import {db} from './db'
import {Post} from "./Post";
import {Database} from "sqlite3";

const dbRun = promisify(db.run.bind(db))
const dbAll = promisify(db.all.bind(db))

export class Blog {
    private readonly db: Database
    private readonly dbRun
    private readonly dbAll

    constructor(db: Database) {
        this.db = db
        this.dbRun = promisify(db.run.bind(db))
        this.dbAll = promisify(db.all.bind(db))
    }

    initialize() {
        const initQuery = `CREATE TABLE IF NOT EXISTS posts (
            id TEXT PRIMARY KEY,
            title TEXT NOT NULL,
            content TEXT,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )`

        return dbRun(initQuery)
    }

    createPost(post: Post) {
        return dbRun(`INSERT INTO posts(id,title,content,created_at) VALUES ('${post.id}', '${post.title}', '${post.content}', '${post.created_at.toISOString()}')`)
    }

    deletePost(id: string) {
        return dbRun(`DELETE FROM posts WHERE id = ${id}`)
    }

    deleteAll() {
        return dbRun(`DELETE FROM posts`)
    }

    getAllPosts(): Promise<Post[]> {
        return dbAll(`SELECT * FROM posts ORDER BY created_at DESC`)
            .then(rows => (rows as any[]).map(row => Post.of(row)))
    }
}