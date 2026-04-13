import { registerLoaders } from 'wuchale/load-utils'
import { loadCatalog, loadIDs } from './.wuchale/home.proxy.js'

const key = 'home'

// two exports. can be used anywhere
export const getRuntime = registerLoaders(key, loadCatalog, loadIDs)
export const getRuntimeRx = getRuntime
