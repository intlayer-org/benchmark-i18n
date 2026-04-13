
            import * as _w_c_home_0_ from './shared.shared.en.compiled.js'
import * as _w_c_home_1_ from './shared.shared.es.compiled.js'
import * as _w_c_home_2_ from './shared.shared.fr.compiled.js'
import * as _w_c_home_3_ from './shared.shared.de.compiled.js'
import * as _w_c_home_4_ from './shared.shared.it.compiled.js'
import * as _w_c_home_5_ from './shared.shared.pt.compiled.js'
import * as _w_c_home_6_ from './shared.shared.zh.compiled.js'
import * as _w_c_home_7_ from './shared.shared.ja.compiled.js'
import * as _w_c_home_8_ from './shared.shared.ko.compiled.js'
import * as _w_c_home_9_ from './shared.shared.ru.compiled.js'
            /** @typedef {import("wuchale/runtime").CatalogModule} CatalogMod */
            /** @typedef {{[locale: string]: CatalogMod}} KeyCatalogs */
            /** @type {{[loadID: string]: KeyCatalogs}} */
            const catalogs = {home: {en: _w_c_home_0_,es: _w_c_home_1_,fr: _w_c_home_2_,de: _w_c_home_3_,it: _w_c_home_4_,pt: _w_c_home_5_,zh: _w_c_home_6_,ja: _w_c_home_7_,ko: _w_c_home_8_,ru: _w_c_home_9_}}
            export const loadCatalog = (/** @type {string} */ loadID, /** @type {string} */ locale) => {
                return /** @type {CatalogMod} */ (/** @type {KeyCatalogs} */ (catalogs[loadID])[locale])
            }
            export const loadIDs = ['home']
        