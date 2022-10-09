import MetaLogo from '../components/social-icons/meta.svg'
import FacebookLetterLogo from '../components/social-icons/facebook-letter.svg'
import EsriLogo from '../components/social-icons/esri.svg'
import KnowruLogo from '../components/social-icons/knowru.svg'
import FumiLogo from '../components/social-icons/fumi.svg'

interface Props {
  company: string
  position: string
  startDate: string
  endDate: string
}

const LogoMapping = {
  Meta: MetaLogo,
  Facebook: FacebookLetterLogo,
  Esri: EsriLogo,
  Knowru: KnowruLogo,
  Fumi: FumiLogo,
}

const ExperienceCard = ({ company, position, startDate, endDate }: Props) => {
  const CompanyLogo = LogoMapping[company]

  return (
    <div className="mt-5 flex items-center gap-4">
      <div
        className="flex items-center justify-center rounded-lg bg-gray-100 p-1 dark:bg-gray-200"
        style={{ height: 68 }}
      >
        <CompanyLogo style={{ height: 'auto', width: 60 }} />
      </div>
      <div className="flex min-w-0 flex-col justify-center">
        <p className="mb-1 flex items-center">
          <span className="font-semibold">{company}</span>
          <span className="ml-1.5 inline-block flex-none translate-y-px rounded bg-gray-100 p-1 text-xs font-medium leading-none text-gray-500 dark:bg-gray-800 dark:text-gray-400">
            {startDate}
            <span className="text-gray-350 dark:text-gray-550 mx-0.5">—</span>
            {endDate}
          </span>
        </p>
        <p className="flex items-center">
          <span className="flex-1 text-sm">{position}</span>
        </p>
      </div>
    </div>
  )
}

export default ExperienceCard
