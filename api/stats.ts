import { VercelRequest, VercelResponse } from '@vercel/node'
import stats from '../data/dev/stats.json'
export default function (req: VercelRequest, res: VercelResponse) {
  res.json(stats)
}
