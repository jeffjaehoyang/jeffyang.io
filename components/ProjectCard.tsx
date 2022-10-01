import Link from './Link'
import SocialIcon from './social-icons'

const ProjectCard = ({ title, description, href, repo }) => (
  <Link href={href} aria-label={`Link to ${title}`}>
    <div className="mb-3 overflow-hidden rounded-md border-2 border-gray-200 border-opacity-60 p-4 dark:border-gray-700">
      <div className="text-md mb-2 font-bold">{title}</div>
      <div className="mb-2 text-sm">{description}</div>
      <div className="float-right flex max-w-fit flex-row items-center rounded-md bg-gray-200 p-4 dark:bg-gray-800">
        <span className="mr-3 text-sm font-semibold">Checkout Repo</span>
        <SocialIcon kind="github" href={repo} size={5} />
      </div>
    </div>
  </Link>
)

export default ProjectCard
