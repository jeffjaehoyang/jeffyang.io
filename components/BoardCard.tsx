import { ReactNode } from 'react'

interface Props {
  title: string
  content: string
  icon: ReactNode
  data?: string
}

const BoardCard = ({ title, content, icon, data }: Props) => {
  return (
    <div
      title={title}
      className="flex w-full flex-col rounded-lg border-2 border-solid border-gray-200 p-4 dark:border-gray-800"
    >
      <div className="mb-2 flex flex-row items-center">
        <div className="mr-2">{icon}</div>
        <div className="text-lg font-bold">{title}</div>
      </div>
      <div className="text-sm">{content}</div>
      <div className="text-sm">{data}</div>
      <div className="mt-4 max-w-fit rounded-xl bg-sky-100 p-1.5 py-0 text-xs text-sky-700 opacity-60">
        coming soon
      </div>
    </div>
  )
}

export default BoardCard
