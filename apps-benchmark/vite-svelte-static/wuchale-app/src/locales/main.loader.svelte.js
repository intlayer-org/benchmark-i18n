import toRuntime from 'wuchale/runtime'
import { locales } from './data.js'

let locale = $state(locales[0])

/**
 * @param {import('./data.js').Locale} newLocale
 */
export function setLocale(newLocale) {
    locale = newLocale
}

// for non-reactive
/**
 * @param {{ [locale in import('./data.js').Locale]: import("wuchale/runtime").CatalogModule }} catalogs
 */
export const getRuntime = catalogs => toRuntime(catalogs[locale], locale)

// same function, only will be inside $derived when used
export const getRuntimeRx = getRuntime
