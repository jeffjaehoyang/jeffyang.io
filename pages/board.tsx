import { PageSEO } from '@/components/SEO'
import BoardCard from '@/components/BoardCard'
import ExperienceCard from '@/components/ExperienceCard'
import {
  DateSVG,
  DollarSVG,
  DotfilesSVG,
  HomeSVG,
  MusicSVG,
  TotalVisitsSVG,
} from '@/components/icons'

const Board = () => {
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
        <BoardCard
          title="Total Blog Visits"
          content={
            "I started my blog in 2019. Thought it'd be interesting to keep track of total visits to my blog since its opening."
          }
          icon={TotalVisitsSVG}
        />
        <BoardCard
          title="Dotfiles"
          content={
            "Since I write code for a living, it'd make a lot of sense to keep my core dotfiles in a portable setting."
          }
          icon={DotfilesSVG}
        />
        <BoardCard
          title="Last Visit Home"
          content={
            'Korea is my home. My goal is to go back home to see my family at least once a year. This will serve as a reminder.'
          }
          icon={HomeSVG}
        />
        <BoardCard
          title="Next Liverpool Game"
          content={
            "I've been a Liverpool fan since 2007. I watch every single Liverpool game, so you know what I'll be doing on this date."
          }
          icon={DateSVG}
        />
        <BoardCard
          title="NASDAQ Index YTD"
          content={
            "As a personal finance junkie, I closely follow the stock market. I'm a big believer of time in the market - not timing the market."
          }
          icon={DollarSVG}
        />
        <BoardCard
          title="Top Tune on Spotify"
          content={
            'I usually listen to the same songs over and over again. Hopefully this will serve as a reminder to explore some new music.'
          }
          icon={MusicSVG}
        />
      </div>
    </>
  )
}

export default Board
