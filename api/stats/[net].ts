import { VercelRequest, VercelResponse } from '@vercel/node'
import DEVNET_DATA from '../../data/devnet/stats.json'
import TESTNET_DATA from '../../data/testnet/stats.json'
import MAINNET_DATA from '../../data/mainnet/stats.json'
export default function (req: VercelRequest, res: VercelResponse) {
  //@ts-expect-error
  res.setHeader('Access-Control-Allow-Credentials', true)
  res.setHeader('Access-Control-Allow-Origin', '*')
  // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  )

  const { net } = req.query
  if (net === 'devnet') {
    res.json(DEVNET_DATA)
    return
  }
  if (net === 'testnet') {
    res.json(TESTNET_DATA)
    return
  }
  if (net === 'mainnet') {
    res.json(MAINNET_DATA)
    return
  }
  res.status(400).send('INVALID NETWORK')
}
