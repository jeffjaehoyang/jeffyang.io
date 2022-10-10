export type Views = {
  total: number
}

export type Stock = {
  latestPrice: string
  ytd: string
  five: string
  ten: string
  twenty: string
}

export type Song = {
  songUrl: string
  artist: string
  title: string
}

export type TopTracks = {
  tracks: Song[]
}
