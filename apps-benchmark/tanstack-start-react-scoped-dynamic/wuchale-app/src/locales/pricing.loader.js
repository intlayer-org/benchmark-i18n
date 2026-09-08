import { registerLoaders } from 'wuchale/load-utils'
import { loadCatalog, loadCount } from './.wuchale/pricing.proxy.js'

const key = 'pricing'

// two exports. can be used anywhere
export const getRuntime = registerLoaders(key, loadCatalog, loadCount)
export const getRuntimeRx = getRuntime
