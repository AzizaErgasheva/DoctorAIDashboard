import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const DB_PATH = path.resolve(__dirname, '../data/db.json')

export async function readDb() {
  const raw = await fs.readFile(DB_PATH, 'utf-8')
  return JSON.parse(raw)
}

export async function writeDb(next) {
  // Simple atomic-ish write (write temp + rename)
  const tmp = `${DB_PATH}.tmp`
  await fs.writeFile(tmp, JSON.stringify(next, null, 2), 'utf-8')
  await fs.rename(tmp, DB_PATH)
}

export function newId(prefix) {
  return `${prefix}_${Math.random().toString(16).slice(2)}`
}

