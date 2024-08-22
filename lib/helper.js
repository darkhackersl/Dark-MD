// @ts-check
import yargs from 'yargs'
import os from 'os'
import path from 'path'
import { fileURLToPath, pathToFileURL } from 'url'
import { createRequire } from 'module'
import fs from 'fs'
import Stream, { Readable } from 'stream'

/**
 * @param {ImportMeta | string} pathURL
 * @param {boolean?} rmPrefix if value is `'true'`, it will remove `'file://'` prefix, if windows it will automatically false
 */
const __filename = function filename(pathURL = import.meta, rmPrefix = os.platform() !== 'win32') {
  const path = /** @type {ImportMeta} */ (pathURL).url || /** @type {String} */ (pathURL)
  return rmPrefix
    ? /file:\/\/\//.test(path)
      ? fileURLToPath(path)
      : path
    : /file:\/\/\//.test(path)
      ? path
      : pathToFileURL(path).href
}
