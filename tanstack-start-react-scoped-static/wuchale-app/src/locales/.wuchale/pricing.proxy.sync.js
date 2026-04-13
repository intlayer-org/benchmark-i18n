
            import * as _w_c_pricing_0_ from './shared.shared.en.compiled.js'
import * as _w_c_pricing_1_ from './shared.shared.es.compiled.js'
import * as _w_c_pricing_2_ from './shared.shared.fr.compiled.js'
import * as _w_c_pricing_3_ from './shared.shared.de.compiled.js'
import * as _w_c_pricing_4_ from './shared.shared.it.compiled.js'
import * as _w_c_pricing_5_ from './shared.shared.pt.compiled.js'
import * as _w_c_pricing_6_ from './shared.shared.zh.compiled.js'
import * as _w_c_pricing_7_ from './shared.shared.ja.compiled.js'
import * as _w_c_pricing_8_ from './shared.shared.ko.compiled.js'
import * as _w_c_pricing_9_ from './shared.shared.ru.compiled.js'
            /** @typedef {import("wuchale/runtime").CatalogModule} CatalogMod */
            /** @typedef {{[locale: string]: CatalogMod}} KeyCatalogs */
            /** @type {{[loadID: string]: KeyCatalogs}} */
            const catalogs = {pricing: {en: _w_c_pricing_0_,es: _w_c_pricing_1_,fr: _w_c_pricing_2_,de: _w_c_pricing_3_,it: _w_c_pricing_4_,pt: _w_c_pricing_5_,zh: _w_c_pricing_6_,ja: _w_c_pricing_7_,ko: _w_c_pricing_8_,ru: _w_c_pricing_9_}}
            export const loadCatalog = (/** @type {string} */ loadID, /** @type {string} */ locale) => {
                return /** @type {CatalogMod} */ (/** @type {KeyCatalogs} */ (catalogs[loadID])[locale])
            }
            export const loadIDs = ['pricing']
        