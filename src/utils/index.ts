import fs from 'node:fs'
import json5 from 'json5'

/**
 *
 * @param vName
 */
export function validateVersionName(vName: string): boolean {
  return /^\d+\.\d+\.\d+$/.test(vName)
}

export async function readJsonFile(filePath: fs.PathOrFileDescriptor) {
  const rawData = await fs.readFileSync(filePath, 'utf8')
  return json5.parse(rawData)
}
/**
 *
 * @param str
 * @returns {number|string}
 */
export function calculateNumber(str: string): number | string {
  // 使用正则表达式检查输入格式是否正确
  if (!validateVersionName(str)) {
    // 如果输入格式不正确，则返回错误消息
    return '输入格式错误，请输入数字.数字.数字格式的字符串'
  }

  // 将输入字符串分割成数组
  const arr = str.split('.')

  // 返回计算结果
  return Number.parseInt(`10${arr.join('')}`)
}

export function upgradeVersion(version: string) {
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
