import process from 'node:process'
import { Buffer } from 'node:buffer'
import GM from '../index.js'

export default new GM({
	rsaPrivateKey: Buffer.from(process.env.GM_RSA_PRIVATE_KEY ?? '', 'base64'),
	hmacPrivateKey: process.env.GM_HMAC_PRIVATE_KEY ?? '',
	project: Number(process.env.GM_PROJECT_ID)
})
