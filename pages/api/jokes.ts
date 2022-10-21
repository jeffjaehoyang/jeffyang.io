import { NextApiRequest, NextApiResponse } from 'next'
import cache from 'memory-cache'

export const config = {
  runtime: 'experimental-edge',
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const endpoint = `https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single`
  const cachedResponse = cache.get(endpoint)
  if (cachedResponse) {
    return res.status(200).json({
      text: cachedResponse['joke'],
    })
  } else {
    const hours = 24
    const response = await fetch(endpoint, {
      method: 'GET',
    })
    const data = await response.json()
    cache.put(endpoint, data, hours * 1000 * 60 * 60)
    const joke = data['joke']
    return res.status(200).json({
      text: joke,
    })
  }
}
