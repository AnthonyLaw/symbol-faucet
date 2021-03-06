import { NetworkCurrencyLocal } from "symbol-sdk"

const {
  NEM_NETWORK,
  NEM_PRIVATE_KEY,
  NEM_GENERATION_HASH,
  NEM_API_URL,
  NEM_PUBLIC_URL,
  NEM_MOSAIC_FQN,
  NEM_MOSAIC_HEX,
  NEM_OUT_MIN,
  NEM_OUT_MAX,
  NEM_OUT_OPT,
  NEM_FEE_MULTIPLIER,
  NEM_MAX_FEE,
  NEM_MAX_DEADLINE,
  NEM_MAX_BALANCE,
  NEM_MAX_UNCONFIRMED,
  NEM_WAIT_BLOCK,
  RECAPTCHA_CLIENT_SECRET,
  RECAPTCHA_SERVER_SECRET,
} = process.env

const API_URL = NEM_API_URL || "http://localhost:3000"
const PUBLIC_URL = NEM_PUBLIC_URL || API_URL
const NETWORK_TYPE = NEM_NETWORK || ""
const MOSAIC_HEX = NEM_MOSAIC_HEX
const MOSAIC_FQN = NEM_MOSAIC_FQN
const MOSAIC_ID = MOSAIC_HEX || MOSAIC_FQN || NetworkCurrencyLocal.NAMESPACE_ID.fullName as string
const OUT_MIN = parseInt(NEM_OUT_MIN || "") || 100000000
const OUT_MAX = parseInt(NEM_OUT_MAX || "") || 500000000
const OUT_OPT = parseInt(NEM_OUT_OPT || "") || (OUT_MAX + OUT_MIN) / 2
const RECAPTCHA_ENABLED = !!(RECAPTCHA_CLIENT_SECRET && RECAPTCHA_SERVER_SECRET)
const RECAPTCHA_ENDPOINT = "https://www.google.com/recaptcha/api/siteverify"

export const env = {
  PRIVATE_KEY: NEM_PRIVATE_KEY,
  GENERATION_HASH: NEM_GENERATION_HASH,
  API_URL,
  PUBLIC_URL,
  NETWORK_TYPE,
  MOSAIC_FQN,
  MOSAIC_HEX,
  MOSAIC_ID,
  OUT_MIN,
  OUT_MAX,
  OUT_OPT,
  FEE_MULTIPLIER: parseFloat(NEM_FEE_MULTIPLIER || "") || undefined,
  MAX_FEE: parseFloat(NEM_MAX_FEE || "") || undefined,
  MAX_DEADLINE: parseInt(NEM_MAX_DEADLINE || "") || 5,
  MAX_UNCONFIRMED: parseInt(NEM_MAX_UNCONFIRMED || "") || 99,
  MAX_BALANCE: parseInt(NEM_MAX_BALANCE || "") || 100000000000,
  WAIT_BLOCK: parseInt(NEM_WAIT_BLOCK || "") || 0,
  RECAPTCHA_ENABLED,
  RECAPTCHA_CLIENT_SECRET,
  RECAPTCHA_SERVER_SECRET,
  RECAPTCHA_ENDPOINT,
}
