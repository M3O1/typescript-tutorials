import {spider} from './spider.js'

spider(process.argv[2], (err: NodeJS.ErrnoException | null, filename?: string, downloaded?: boolean) => {
    if (err) {
        console.error(err)
    } else if (downloaded) {
        console.log(`Completed the download of "${filename}"`)
    } else {
        console.log(`"${filename}" was already downloaded`)
    }
})