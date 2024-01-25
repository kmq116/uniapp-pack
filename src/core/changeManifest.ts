import { calculateNumber } from '../utils'
import { writeManifest } from './readFiles'

export function changeManifestPackName(manifestFileContent: any, name: string) {
  manifestFileContent.name = name
}

export function changeManifestVersion(manifestFileContent: any, { versionName }: { versionName: string }) {
  manifestFileContent.versionName = versionName
  manifestFileContent.versionCode = calculateNumber(versionName)
  writeManifest(manifestFileContent)
}

export function updateManifestVersion(manifest: any, { version }: { version: string }) {
  const versionArr = version.split('.').map(Number) // 将版本号字符串拆分成数字数组

  versionArr[2] += 1 // 将最后一个数字加1

  if (versionArr[2] === 10) {
    // 如果最后一个数字满10
    versionArr[2] = 0 // 将最后一个数字重置为0
    versionArr[1] += 1 // 将中间数字加1

    if (versionArr[1] === 10) {
      // 如果中间数字满10
      versionArr[1] = 0 // 将中间数字重置为0
      versionArr[0] += 1 // 将第一个数字加1
    }
  }

  return versionArr.join('.') // 将数字数组转换回版本号字符串
}
