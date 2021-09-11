export class Post {
    private readonly _id: string
    private readonly _title: string
    private readonly _content: string
    private readonly _created_at: Date

    constructor(id: string, title: string, content: string, created_at?: Date) {
        this._id = id;
        this._title = title;
        this._content = content;
        this._created_at = created_at ? created_at : new Date();
    }

    get id(): string {
        return this._id;
    }

    get title(): string {
        return this._title;
    }

    get content(): string {
        return this._content;
    }

    get created_at(): Date {
        return this._created_at;
    }

    static of(value: any): Post {
        return new Post(value.id, value.title, value.content, value.created_at)
    }
}