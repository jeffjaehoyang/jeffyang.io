import { Song, TopTracks } from '@/lib/types'
import { ReactNode } from 'react'
import SocialIcon from './social-icons'

interface Props {
  title: string
  content: string
  icon: ReactNode
  metric?: string | number
  stockData?: string[]
  spotifyData?: TopTracks
}

const BoardCard = ({ title, content, icon, metric, stockData, spotifyData }: Props) => {
  return (
    <div
      title={title}
      className="flex w-full flex-col justify-between overflow-hidden rounded-lg border-2 border-solid border-gray-200 p-4 dark:border-gray-800"
    >
      <div>
        <div className="mb-2 flex flex-row items-center">
          <div className="mr-2">{icon}</div>
          <div className="text-lg font-bold">{title}</div>
        </div>
        <div className="text-sm">{content}</div>
      </div>
      <div>
        {!metric && !stockData && !spotifyData && (
          <div className="ml-auto mt-4 max-w-fit rounded-md bg-sky-100 px-1.5 py-1 text-xs text-sky-700 opacity-60">
            coming soon
          </div>
        )}
        {metric && <div className="ml-auto mt-2 max-w-fit text-xl font-bold">{metric}</div>}
        {spotifyData && (
          <a
            href={spotifyData?.tracks[0].songUrl}
            className="mt-2 flex flex-col text-lg font-bold"
            target="_blank"
          >
            {spotifyData?.tracks && (
              <>
                <div className="nasdaq-ytd truncate">{spotifyData.tracks[0].title}</div>
                <div className="nasdaq-five ml-auto flex flex-row items-center text-sm">
                  <span className="mr-2">by {spotifyData.tracks[0].artist}</span>
                  <SocialIcon kind={'spotify'} size={5} href={spotifyData?.tracks[0].songUrl} />
                </div>
              </>
            )}
          </a>
        )}
        {stockData && (
          <div className="text-md float-right mt-3 flex flex-row items-center font-bold">
            <div className="nasdaq-ytd mr-2 flex h-14 w-14 flex-col items-center justify-center rounded-full bg-gray-100 p-1 text-sm dark:bg-gray-700">
              <span className="text-xs font-normal">(ytd)</span>
              <span>{stockData && stockData[0]}%</span>
            </div>
            <div className="nasdaq-five mr-2 flex h-14 w-14 flex-col items-center justify-center rounded-full bg-gray-100 p-1 text-sm dark:bg-gray-700">
              <span className="text-xs font-normal">(5)</span>
              <span>{stockData && stockData[1]}%</span>
            </div>
            <div className="nasdaq-ten mr-2 flex h-14 w-14 flex-col items-center justify-center rounded-full bg-gray-100 p-1 text-sm dark:bg-gray-700">
              <span className="text-xs font-normal">(10)</span>
              <span>{stockData && stockData[2]}%</span>
            </div>
            <div className="nasdaq-twenty mr-2 flex h-14 w-14 flex-col items-center justify-center rounded-full bg-gray-100 p-1 text-sm dark:bg-gray-700">
              <span className="text-xs font-normal">(20)</span>
              <span>{stockData && stockData[3]}%</span>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default BoardCard
