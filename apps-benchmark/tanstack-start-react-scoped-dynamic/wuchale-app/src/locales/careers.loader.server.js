import { currentRuntime } from 'wuchale/load-utils/server'
import { loadCatalog, loadCount } from './.wuchale/careers.proxy.sync.js'

export const key = 'careers'
export { loadCatalog, loadCount } // for loading before runWithLocale

// two exports, same function
export const getRuntime = (loadID = 0) => currentRuntime(key, loadID)
export const getRuntimeRx = getRuntime
