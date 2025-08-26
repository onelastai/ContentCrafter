import fs from 'fs'

export function rewriteContent(path: string): string {
  console.log(`📥 Rewriting content from ${path}`)
  return fs.readFileSync(path, 'utf-8')
}

