import fs from 'node:fs'
import path from 'node:path'

import { readJsonFile } from '../utils'

// eslint-disable-next-line node/prefer-global/process
export const manifestPath = path.join(process.cwd(), '/manifest.json')

export function writeFileSync(filePath: fs.PathOrFileDescriptor, data: string | NodeJS.ArrayBufferView) {
  fs.writeFileSync(filePath, data, 'utf8')
}

export async function readManifest() {
  return await readJsonFile(manifestPath)
}

export function writeManifest(content: any) {
  writeFileSync(manifestPath, JSON.stringify(content, null, 2))
}
