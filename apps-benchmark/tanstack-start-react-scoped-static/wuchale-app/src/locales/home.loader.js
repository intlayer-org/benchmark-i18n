import { registerLoaders } from 'wuchale/load-utils'
import { loadCatalog, loadCount } from './.wuchale/home.proxy.js'

const key = 'home'

// two exports. can be used anywhere
export const getRuntime = registerLoaders(key, loadCatalog, loadCount)
export const getRuntimeRx = getRuntime
