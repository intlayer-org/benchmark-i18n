import { registerLoaders } from 'wuchale/load-utils'
import { loadCatalog, loadCount } from './.wuchale/products.proxy.js'

const key = 'products'

// two exports. can be used anywhere
export const getRuntime = registerLoaders(key, loadCatalog, loadCount)
export const getRuntimeRx = getRuntime
