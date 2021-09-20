import { VercelRequest, VercelResponse } from '@vercel/node'
import DEVNET_DATA from '../../data/devnet/stats.json'
import TESTNET_DATA from '../../data/devnet/stats.json'
import MAINNET_DATA from '../../data/devnet/stats.json'
export default function (req: VercelRequest, res: VercelResponse) {
  const { net } = req.query
  if (net === 'devnet') {
    res.setHeader('Access-Control-Allow-Origin', '*').json(DEVNET_DATA)
    return
  }
  if (net === 'testnet') {
    res.setHeader('Access-Control-Allow-Origin', '*').json(TESTNET_DATA)
    return
  }
  if (net === 'mainnet') {
    res.setHeader('Access-Control-Allow-Origin', '*').json(MAINNET_DATA)
    return
  }
  res.status(400).send('INVALID NETWORK')
}
