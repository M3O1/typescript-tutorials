import fs from "fs";
import path from "path";
import superagent from 'superagent';
import {urlToFilename} from "./utils";

type callbackFn = (err: NodeJS.ErrnoException | null, filename?: string, downloaded?: boolean) => void;

export function spider(url: string, cb: callbackFn) {
    const filename = urlToFilename(url)
    fs.access(filename, err => {
        if (!err || err.code !== 'ENOENT') {
            return cb(null, filename, false)
        }
        download(url, cb, filename);
    })
}

function saveFile(filename: string, cb: callbackFn, content: string) {
    fs.mkdir(path.dirname(filename), {recursive: true}, err => {
        if (err) {
            return cb(err)
        }
        fs.writeFile(filename, content, err => {
            if (err) {
                return cb(err)
            }
            cb(null, filename, true)
        })
    })
}

function download(url: string, cb: callbackFn, filename: string) {
    superagent
        .get(url)
        .end((err, res) => {
            if (err) {
                return cb(err)
            }
            saveFile(filename, cb, res.text);
        })
}