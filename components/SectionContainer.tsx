import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function SectionContainer({ children }: Props) {
  return <div className="mx-auto max-w-2xl overflow-x-clip px-7 md:px-0">{children}</div>
}
