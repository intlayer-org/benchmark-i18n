
            
            /** @typedef {() => Promise<import("wuchale/runtime").CatalogModule>} CatalogMod */
            /** @typedef {{[locale: string]: CatalogMod}} KeyCatalogs */
            /** @type {{[loadID: string]: KeyCatalogs}} */
            const catalogs = {team: {en: () => import('./shared.shared.en.compiled.js'),es: () => import('./shared.shared.es.compiled.js'),fr: () => import('./shared.shared.fr.compiled.js'),de: () => import('./shared.shared.de.compiled.js'),it: () => import('./shared.shared.it.compiled.js'),pt: () => import('./shared.shared.pt.compiled.js'),zh: () => import('./shared.shared.zh.compiled.js'),ja: () => import('./shared.shared.ja.compiled.js'),ko: () => import('./shared.shared.ko.compiled.js'),ru: () => import('./shared.shared.ru.compiled.js')}}
            export const loadCatalog = (/** @type {string} */ loadID, /** @type {string} */ locale) => {
                return /** @type {CatalogMod} */ (/** @type {KeyCatalogs} */ (catalogs[loadID])[locale])()
            }
            export const loadIDs = ['team']
        