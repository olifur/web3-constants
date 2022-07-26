import { CONSTANTS as ETHEREUM } from './ethereum'
import { CONSTANTS as BSC } from './bsc'
import { CONSTANTS as POLYGON } from './polygon'
import { CONSTANTS as SOLANA } from './solana'
import { CONSTANTS as AVAX } from './avax'
import { CONSTANTS as AVAX_TESTNET } from './avax_testnet'



let CONSTANTS = {}

CONSTANTS['ethereum'] = ETHEREUM
CONSTANTS['bsc'] = BSC
CONSTANTS['polygon'] = POLYGON
CONSTANTS['solana'] = SOLANA
CONSTANTS['avax'] = AVAX
CONSTANTS['avax_testnet'] = AVAX_TESTNET

export { CONSTANTS }
