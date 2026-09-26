import toRuntime from 'wuchale/runtime'
import { locales } from './data.js'

let locale = locales[0]

/**
 * @param {import('./data.js').Locale} newLocale
 */
export function setLocale(newLocale) {
    locale = newLocale
}

/**
 * @param {{ [locale in import('./data.js').Locale]: import("wuchale/runtime").CatalogModule }} catalogs
 */
export const getRuntime = catalogs => toRuntime(catalogs[locale], locale)
export const getRuntimeRx = getRuntime
