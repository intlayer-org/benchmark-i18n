import { registerLoaders } from 'wuchale/load-utils'
import { loadCatalog, loadIDs } from './.wuchale/careers.proxy.js'

const key = 'careers'

// two exports. can be used anywhere
export const getRuntime = registerLoaders(key, loadCatalog, loadIDs)
export const getRuntimeRx = getRuntime
