import path from 'path';
import {URL} from 'url';
import slug from 'slug';

export function urlToFilename(url: string) {
    const parsedUrl = new URL(url)

    const hostName = parsedUrl.hostname
    const urlPath = parsedUrl
        .pathname
        .split('/')
        .filter(e => !e || e.length > 0)
        .map(e => slug(e))
        .join('/')

    let filename = urlPath.length > 1 ? path.join(hostName, urlPath) : hostName;
    if (!path.extname(filename).match(/htm/)) {
        filename += '.html'
    }
    return filename
}