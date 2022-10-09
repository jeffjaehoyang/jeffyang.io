import { getTopTracks } from 'lib/spotify'
import { NextApiRequest, NextApiResponse } from 'next'

export const config = {
  runtime: 'experimental-edge',
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const response = await getTopTracks()
  const { items } = await response.json()

  const tracks = items?.slice(0, 10).map((track) => ({
    artist: track.artists.map((_artist) => _artist.name).join(', '),
    songUrl: track.external_urls.spotify,
    title: track.name,
  }))

  return res.status(200).json({ tracks })

  // TODO:: figure out why below doesn't work
  // return new Response(JSON.stringify({ tracks }), {
  //   status: 200,
  //   headers: {
  //     'content-type': 'application/json',
  //     'cache-control': 'public, s-maxage=86400, stale-while-revalidate=43200',
  //   },
  // })
}
