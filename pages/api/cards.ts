import type { NextApiRequest, NextApiResponse } from 'next'
import cards from '../../data/cards.json'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(cards)
}
