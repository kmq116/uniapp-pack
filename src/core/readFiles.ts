import fs from 'node:fs'
import path from 'node:path'

import json5 from 'json5'

// eslint-disable-next-line node/prefer-global/process
export const manifestPath = path.join(process.cwd(), '/manifest.json')
export async function readJsonFile(filePath: fs.PathOrFileDescriptor) {
  const rawData = await fs.readFileSync(filePath, 'utf8')
  return json5.parse(rawData)
}

export function writeFileSync(filePath: fs.PathOrFileDescriptor, data: string | NodeJS.ArrayBufferView) {
  fs.writeFileSync(filePath, data, 'utf8')
}

export async function readManifest() {
  return await readJsonFile(manifestPath)
}

export function writeManifest(content: any) {
  writeFileSync(manifestPath, JSON.stringify(content, null, 2))
}
