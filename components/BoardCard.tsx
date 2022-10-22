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
      className="flex flex-col justify-between w-full p-4 overflow-hidden border-2 border-gray-200 border-solid rounded-lg dark:border-gray-800"
    >
      <div>
        <div className="flex flex-row items-center mb-2">
          <div className="mr-2">{icon}</div>
          <div className="text-lg font-bold">{title}</div>
        </div>
        <div className="text-sm">{content}</div>
      </div>
      <div>
        {metric && <div className="mt-2 ml-auto text-lg font-bold max-w-fit">{metric}</div>}
        {spotifyData && (
          <div className="flex flex-col mt-2 text-lg font-bold">
            {spotifyData?.tracks && (
              <>
                <div className="truncate nasdaq-ytd">{spotifyData.tracks[0].title}</div>
                <div className="flex flex-row items-center ml-auto text-sm nasdaq-five">
                  <span className="mr-2">by {spotifyData.tracks[0].artist}</span>
                  <SocialIcon kind={'spotify'} size={5} href={spotifyData?.tracks[0].songUrl} />
                </div>
              </>
            )}
          </div>
        )}
        {stockData && (
          <div className="flex flex-col float-right text-xs">
            <div className="flex flex-row items-center float-right mt-2 font-bold text-md">
              <div className="flex flex-col items-center justify-center p-1 text-sm bg-gray-100 rounded-full nasdaq-ytd h-14 w-14 dark:bg-gray-700">
                <span className="text-xs font-normal">(ytd)</span>
                <span>{stockData && stockData[0]}%</span>
              </div>
              <div className="flex flex-col items-center justify-center p-1 ml-2 text-sm bg-gray-100 rounded-full nasdaq-five h-14 w-14 dark:bg-gray-700">
                <span className="text-xs font-normal">(5y)</span>
                <span>{stockData && stockData[1]}%</span>
              </div>
              <div className="flex flex-col items-center justify-center p-1 ml-2 text-sm bg-gray-100 rounded-full nasdaq-ten h-14 w-14 dark:bg-gray-700">
                <span className="text-xs font-normal">(10y)</span>
                <span>{stockData && stockData[2]}%</span>
              </div>
              <div className="flex flex-col items-center justify-center p-1 ml-2 text-sm bg-gray-100 rounded-full nasdaq-twenty h-14 w-14 dark:bg-gray-700">
                <span className="text-xs font-normal">(20y)</span>
                <span>{stockData && stockData[3]}%</span>
              </div>
            </div>
            <span className="mt-2 ml-auto text-xs">Powered by Alpha Vantage</span>
          </div>
        )}
        {liverpoolData && (
          <div className="flex flex-col mt-2 ml-auto font-bold max-w-fit">
            <div className="flex flex-row items-center ml-auto text-xs">
              <span>{liverpoolData.date}</span>
              <span className="ml-1 mr-1">·</span>
              <span>{liverpoolData.competition.name}</span>
            </div>
            <div className="ml-auto text-lg leading-6">
              {liverpoolData.homeTeam.name} (H) <span className="text-xs font-normal">vs.</span>
            </div>
            <div className="ml-auto text-lg leading-6">{liverpoolData.awayTeam.name} (A)</div>
            <span className="mt-1 ml-auto text-xs font-normal">Powered by football-data.org</span>
          </div>
        )}
        {jokeData && (
          <div className="flex flex-col mt-2 ml-auto text-lg font-bold max-w-fit">
            <div className="flex flex-col">
              <div className="ml-auto text-sm font-bold leading-6">{jokeData.text}</div>
              <span className="mt-1 ml-auto text-xs font-normal">Powered by Joke API</span>
            </div>
          </div>
        )}
        {dateHistoryData && (
          <div className="flex flex-col mt-2 ml-auto text-lg font-bold max-w-fit">
            <div className="flex flex-col">
              <div className="ml-auto text-sm font-bold leading-5">"{dateHistoryData.text}"</div>
              <span className="mt-1 ml-auto text-xs font-normal">Powered by Numbers API</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BoardCard;
