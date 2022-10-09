import { ReactNode } from 'react'

interface Props {
  title: string
  content: string
  icon: ReactNode
  metric?: string | number
  stockData?: string[]
}

const BoardCard = ({ title, content, icon, metric, stockData }: Props) => {
  return (
    <div
      title={title}
      className="w-full overflow-hidden rounded-lg border-2 border-solid border-gray-200 p-4 dark:border-gray-800"
    >
      <div className="mb-2 flex flex-row items-center">
        <div className="mr-2">{icon}</div>
        <div className="text-lg font-bold">{title}</div>
      </div>
      <div className="text-sm">{content}</div>
      {!metric && !stockData && (
        <div className="mt-4 max-w-fit rounded-xl bg-sky-100 p-1.5 py-0 text-xs text-sky-700 opacity-60">
          coming soon
        </div>
      )}
      <div className="float-right mt-2 max-w-fit text-xl font-bold">{metric}</div>
      <div className="float-right mt-2 flex max-w-fit flex-row items-center text-lg font-bold">
        {stockData && (
          <>
            <div className="nasdaq-ytd mr-2">{stockData && stockData[0]}%</div>
            <div className="nasdaq-ten mr-2">{stockData && stockData[2]}%</div>
            <div className="nasdaq-twenty">{stockData && stockData[3]}%</div>
          </>
        )}
      </div>
    </div>
  )
}

export default BoardCard
