import {promisify} from 'util'
import {Post} from "./Post";
import {Database} from "sqlite3";

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

        return this.dbRun(initQuery)
    }

    createPost(post: Post) {
        return this.dbRun(`INSERT INTO posts(id,title,content,created_at) VALUES ('${post.id}', '${post.title}', '${post.content}', '${post.created_at.toISOString()}')`)
    }

    deletePost(id: string) {
        return this.dbRun(`DELETE FROM posts WHERE id = ${id}`)
    }

    deleteAll() {
        return this.dbRun(`DELETE FROM posts`)
    }

    getAllPosts(): Promise<Post[]> {
        return this.dbAll(`SELECT * FROM posts ORDER BY created_at DESC`)
            .then(value => {
                const rows = value as any[]
                return rows.map(row => Post.of(row));
            })
    }
}