import { VercelRequest, VercelResponse } from '@vercel/node'

export default function (req: VercelRequest, res: VercelResponse) {
  // const { name = 'World' } = req.query
  res.json({ body: 'Hello World!' })
}
