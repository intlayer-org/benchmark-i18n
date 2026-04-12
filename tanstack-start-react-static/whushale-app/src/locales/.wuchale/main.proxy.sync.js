
            import * as _w_c_main_0_ from './main.main.en.compiled.js'
import * as _w_c_main_1_ from './main.main.es.compiled.js'
import * as _w_c_main_2_ from './main.main.fr.compiled.js'
import * as _w_c_main_3_ from './main.main.de.compiled.js'
import * as _w_c_main_4_ from './main.main.it.compiled.js'
import * as _w_c_main_5_ from './main.main.pt.compiled.js'
import * as _w_c_main_6_ from './main.main.zh.compiled.js'
import * as _w_c_main_7_ from './main.main.ja.compiled.js'
import * as _w_c_main_8_ from './main.main.ko.compiled.js'
import * as _w_c_main_9_ from './main.main.ru.compiled.js'
            /** @typedef {import("wuchale/runtime").CatalogModule} CatalogMod */
            /** @typedef {{[locale: string]: CatalogMod}} KeyCatalogs */
            /** @type {{[loadID: string]: KeyCatalogs}} */
            const catalogs = {main: {en: _w_c_main_0_,es: _w_c_main_1_,fr: _w_c_main_2_,de: _w_c_main_3_,it: _w_c_main_4_,pt: _w_c_main_5_,zh: _w_c_main_6_,ja: _w_c_main_7_,ko: _w_c_main_8_,ru: _w_c_main_9_}}
            export const loadCatalog = (/** @type {string} */ loadID, /** @type {string} */ locale) => {
                return /** @type {CatalogMod} */ (/** @type {KeyCatalogs} */ (catalogs[loadID])[locale])
            }
            export const loadIDs = ['main']
        