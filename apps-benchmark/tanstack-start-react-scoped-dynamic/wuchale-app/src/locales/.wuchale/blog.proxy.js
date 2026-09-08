
            
            /** @typedef {() => Promise<import("wuchale/runtime").CatalogModule>} CatalogMod */
            /** @type {{[locale: string]: CatalogMod[]}} */
            const catalogs = {en: [() => import('./shared.0.en.compiled.js')],es: [() => import('./shared.0.es.compiled.js')],fr: [() => import('./shared.0.fr.compiled.js')],de: [() => import('./shared.0.de.compiled.js')],it: [() => import('./shared.0.it.compiled.js')],pt: [() => import('./shared.0.pt.compiled.js')],zh: [() => import('./shared.0.zh.compiled.js')],ja: [() => import('./shared.0.ja.compiled.js')],ko: [() => import('./shared.0.ko.compiled.js')],ru: [() => import('./shared.0.ru.compiled.js')]}
            export const loadCatalog = (/** @type {number} */ loadID, /** @type {string} */ locale) => {
                return /** @type {CatalogMod} */ (/** @type {CatalogMod[]} */ (catalogs[locale])[loadID])()
            }
            export const loadCount = 1
            // not essential. in case it is needed and for debugging
            export const patterns = ["blog"]
        