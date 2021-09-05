import {EventEmitter} from 'events';
import {readFile} from 'fs';


export class FindRegex extends EventEmitter {
    readonly EVENT = {
        FILEREAD: 'fileread',
        FOUND: 'found',
        ERROR: "error"
    }
    private readonly regex: RegExp;
    private readonly options: BufferEncoding;
    private readonly files: string[];

    constructor(regex: RegExp, options: BufferEncoding = 'utf8') {
        super();
        this.regex = regex
        this.options = options
        this.files = []
    }

    addFile(file: string) {
        this.files.push(file)
        return this
    }

    find() {

        for (const file of this.files) {
            readFile(file, this.options, (err, content) => {
                if (err) {
                    return this.emit(this.EVENT.ERROR, err)
                }

                this.emit(this.EVENT.FILEREAD, file);

                content
                    .match(this.regex)
                    ?.forEach(e => this.emit(this.EVENT.FOUND, file, e))
            })
        }
        return this;
    }
}