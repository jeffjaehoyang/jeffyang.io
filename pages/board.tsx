import { PageSEO } from '@/components/SEO'
import BoardCard from '@/components/BoardCard'
import ExperienceCard from '@/components/ExperienceCard'
import {
  BarChartSquareSVG,
  DotfilesSVG,
  HomeSVG,
  MusicSVG,
  TotalVisitsSVG,
  TrophySVG,
} from '@/components/icons'
import useSWR from 'swr'
import { LiverpoolFixture, Stock, TopTracks, Views } from '@/lib/types'
import fetcher from '@/lib/fetcher'
import { getDaysSince, lastDayInKorea, prevUncountedViews } from '@/lib/boardDataUtils'

const TotalBlogViewsBoardCard = () => {
  const { data } = useSWR<Views>('/api/views', fetcher)
  const pageViews = data?.total ? parseInt(data?.total?.toString()) + prevUncountedViews : '--'
  return (
    <BoardCard
      title="Total Blog Visits"
      content={
        "I started my blog in 2019. Thought it'd be interesting to keep track of total visits to my blog since its opening."
      }
      icon={TotalVisitsSVG}
      metric={`${pageViews.toLocaleString()} visits`}
    />
  )
}

const NasdaqBoardCard = () => {
  const { data } = useSWR<Stock>('/api/stock', fetcher)
  return (
    <BoardCard
      title="NASDAQ Index Returns"
      content={
        'I see investing as vehicle to financial independence in the long run. Remember, time in the market almost always beats timing the market.'
      }
      icon={BarChartSquareSVG}
      stockData={[data?.ytd, data?.five, data?.ten, data?.twenty]}
    />
  )
}

const SpotifyBoardCard = () => {
  const { data } = useSWR<TopTracks>('/api/top-tracks', fetcher)
  return (
    <BoardCard
      title="Top Tune on Spotify"
      content={
        'I usually listen to the same songs over and over again. Hopefully this will serve as a reminder to explore some new music.'
      }
      icon={MusicSVG}
      spotifyData={data}
    />
  )
}

const LiverpoolBoardCard = () => {
  const { data } = useSWR<LiverpoolFixture>('/api/liverpool', fetcher)
  return (
    <BoardCard
      title="Next Liverpool Game"
      content={"I've been a Liverpool fan since 2007 - I try to watch every single Liverpool game."}
      icon={TrophySVG}
      liverpoolData={data}
    />
  )
}

const Board = () => {
  const daysSinceHome = getDaysSince(lastDayInKorea) // last day I was in Korea

  return (
    <>
      <PageSEO title={`Board`} description={`Random facts and scribbles`} />
      <div className="mb-8">
        <div className="text-lg font-extrabold tracking-tight">Board</div>
        <div className="text-2xl font-extrabold">Random Facts and Scribbles.</div>
      </div>
      <div className="work-experience mb-4 rounded-lg border-2 border-solid border-gray-200 p-4 dark:border-gray-800">
        <div className="font-bold tracking-tight">Workplace</div>
        <ExperienceCard
          company="Meta"
          position="Software Engineer"
          startDate="Jun 2022"
          endDate="Today"
        />
        <ExperienceCard
          company="Facebook"
          position="Software Engineer, Intern"
          startDate="Jun 2021"
          endDate="Sep 2021"
        />
        <ExperienceCard
          company="Fumi"
          position="Software Engineer, Intern"
          startDate="Oct 2020"
          endDate="Jan 2021"
        />
        <ExperienceCard
          company="Esri"
          position="Software Engineer, Intern"
          startDate="Jun 2020"
          endDate="Sep 2020"
        />
        <ExperienceCard
          company="Knowru"
          position="Software Engineer, Intern"
          startDate="Jul 2019"
          endDate="Sep 2019"
        />
      </div>
      <div className="grid grid-flow-row grid-cols-1 grid-rows-3 justify-between gap-4 sm:grid-cols-2 sm:grid-rows-1 xl:grid-cols-2">
        <TotalBlogViewsBoardCard />
        <BoardCard
          title="Last Visit Home"
          content={
            'Korea is my home. My goal is to go back home to see my family at least once a year. This will serve as a reminder.'
          }
          icon={HomeSVG}
          metric={`${daysSinceHome} days`}
        />
        <SpotifyBoardCard />
        <NasdaqBoardCard />
        <LiverpoolBoardCard />
        <BoardCard
          title="Dotfiles"
          content={
            "Since I write code for a living, it'd make a lot of sense to keep my core dotfiles in a portable setting."
          }
          icon={DotfilesSVG}
        // metric={`https://github.com/jeffjaehoyang/.dotfiles`}
        />
      </div>
    </>
  )
}

export default Board
