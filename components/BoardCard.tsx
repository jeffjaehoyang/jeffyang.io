import { ReactNode } from 'react';

import { DateHistory, Joke, LiverpoolFixture, TopTracks } from '@/lib/types';

import SocialIcon from './social-icons';

interface Props {
  title: string;
  content: string;
  icon: ReactNode;
  metric?: string | number;
  stockData?: string[];
  spotifyData?: TopTracks;
  liverpoolData?: LiverpoolFixture;
  jokeData?: Joke;
  dateHistoryData?: DateHistory;
}

const BoardCard = ({
  title,
  content,
  icon,
  metric,
  stockData,
  spotifyData,
  liverpoolData,
  jokeData,
  dateHistoryData,
}: Props) => {
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
        {metric && <div className="ml-auto mt-2 max-w-fit text-lg font-bold">{metric}</div>}
        {spotifyData && (
          <div className="mt-2 flex flex-col text-lg font-bold">
            {spotifyData?.tracks && (
              <>
                <div className="nasdaq-ytd truncate">{spotifyData.tracks[0].title}</div>
                <div className="nasdaq-five ml-auto flex flex-row items-center text-sm">
                  <span className="mr-2">by {spotifyData.tracks[0].artist}</span>
                  <SocialIcon kind={'spotify'} size={5} href={spotifyData?.tracks[0].songUrl} />
                </div>
              </>
            )}
          </div>
        )}
        {stockData && (
          <div className="flex flex-col text-xs">
            <div className="text-md float-right mt-2 flex flex-row items-center font-bold">
              <div className="nasdaq-ytd flex h-14 w-14 flex-col items-center justify-center rounded-full bg-gray-100 p-1 text-sm dark:bg-gray-700">
                <span className="text-xs font-normal">(ytd)</span>
                <span className="text-xs">{stockData && stockData[0]}%</span>
              </div>
              <div className="nasdaq-five ml-2 flex h-14 w-14 flex-col items-center justify-center rounded-full bg-gray-100 p-1 text-sm dark:bg-gray-700">
                <span className="text-xs font-normal">(5y)</span>
                <span className="text-xs">{stockData && stockData[1]}%</span>
              </div>
              <div className="nasdaq-ten ml-2 flex h-14 w-14 flex-col items-center justify-center rounded-full bg-gray-100 p-1 text-sm dark:bg-gray-700">
                <span className="text-xs font-normal">(10y)</span>
                <span className="text-xs">{stockData && stockData[2]}%</span>
              </div>
              <div className="nasdaq-twenty ml-2 flex h-14 w-14 flex-col items-center justify-center rounded-full bg-gray-100 p-1 text-sm dark:bg-gray-700">
                <span className="text-xs font-normal">(20y)</span>
                <span className="text-xs">{stockData && stockData[3]}%</span>
              </div>
            </div>
            <span className="ml-auto mt-2 text-xs">Powered by Alpha Vantage</span>
          </div>
        )}
        {liverpoolData && (
          <div className="ml-auto mt-2 flex max-w-fit flex-col font-bold">
            <div className="ml-auto flex flex-row items-center text-xs">
              <span>{liverpoolData.date}</span>
              <span className="ml-1 mr-1">·</span>
              <span>{liverpoolData.competition.name}</span>
            </div>
            <div className="ml-auto text-lg leading-6">
              {liverpoolData.homeTeam.name} (H) <span className="text-xs font-normal">vs.</span>
            </div>
            <div className="ml-auto text-lg leading-6">{liverpoolData.awayTeam.name} (A)</div>
            <span className="ml-auto text-xs font-normal">Time in Eastern Time (ET)</span>
            <span className="ml-auto mt-1 text-xs font-normal">Powered by football-data.org</span>
          </div>
        )}
        {jokeData && (
          <div className="ml-auto mt-2 flex max-w-fit flex-col text-lg font-bold">
            <div className="flex flex-col">
              <div className="ml-auto text-sm font-bold leading-6">{jokeData.text}</div>
              <span className="ml-auto mt-1 text-xs font-normal">Powered by Joke API</span>
            </div>
          </div>
        )}
        {dateHistoryData && (
          <div className="ml-auto mt-2 flex max-w-fit flex-col text-lg font-bold">
            <div className="flex flex-col">
              <div className="ml-auto text-sm font-bold leading-5">"{dateHistoryData.text}"</div>
              <span className="ml-auto mt-1 text-xs font-normal">Powered by Numbers API</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BoardCard;
