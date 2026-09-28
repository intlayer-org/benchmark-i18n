
            import * as _w_c_0_0_ from './main.0.en.compiled.js'
import * as _w_c_0_1_ from './main.0.es.compiled.js'
import * as _w_c_0_2_ from './main.0.fr.compiled.js'
import * as _w_c_0_3_ from './main.0.de.compiled.js'
import * as _w_c_0_4_ from './main.0.it.compiled.js'
import * as _w_c_0_5_ from './main.0.pt.compiled.js'
import * as _w_c_0_6_ from './main.0.zh.compiled.js'
import * as _w_c_0_7_ from './main.0.ja.compiled.js'
import * as _w_c_0_8_ from './main.0.ko.compiled.js'
import * as _w_c_0_9_ from './main.0.ru.compiled.js'
            /** @typedef {import("wuchale/runtime").CatalogModule} CatalogMod */
            /** @type {{[locale: string]: CatalogMod[]}} */
            const catalogs = {en: [_w_c_0_0_],es: [_w_c_0_1_],fr: [_w_c_0_2_],de: [_w_c_0_3_],it: [_w_c_0_4_],pt: [_w_c_0_5_],zh: [_w_c_0_6_],ja: [_w_c_0_7_],ko: [_w_c_0_8_],ru: [_w_c_0_9_]}
            export const loadCatalog = (/** @type {number} */ loadID, /** @type {string} */ locale) => {
                return /** @type {CatalogMod} */ (/** @type {CatalogMod[]} */ (catalogs[locale])[loadID])
            }
            export const loadCount = 1
            // not essential. in case it is needed and for debugging
            export const patterns = ["main"]
        