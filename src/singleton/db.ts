import {dirname, join} from 'path'
import sqlite3 from 'sqlite3'

const __dirname = dirname(__filename)
export const db = new sqlite3.Database(join(__dirname, 'data.sqlite'))