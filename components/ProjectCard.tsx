import Link from './Link'
import SocialIcon from './social-icons'

const ProjectCard = ({ title, description, href, repo }) => (
  <Link href={href} aria-label={`Link to ${title}`}>
    <div className="mb-4 overflow-hidden rounded-md border-2 border-gray-200 border-opacity-60 p-4 dark:border-gray-700">
      <div className="text-md mb-2 font-bold">{title}</div>
      <div className="mb-2 text-sm">{description}</div>
      <div className="float-right mt-2 flex flex-row items-center">
        <a
          className="mr-3 flex max-w-fit flex-row items-center rounded-md bg-gray-200 px-3 py-2 dark:bg-gray-800"
          href={href}
        >
          <span className="mr-3 text-sm font-semibold">Link</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path
              fillRule="evenodd"
              d="M19.902 4.098a3.75 3.75 0 00-5.304 0l-4.5 4.5a3.75 3.75 0 001.035 6.037.75.75 0 01-.646 1.353 5.25 5.25 0 01-1.449-8.45l4.5-4.5a5.25 5.25 0 117.424 7.424l-1.757 1.757a.75.75 0 11-1.06-1.06l1.757-1.757a3.75 3.75 0 000-5.304zm-7.389 4.267a.75.75 0 011-.353 5.25 5.25 0 011.449 8.45l-4.5 4.5a5.25 5.25 0 11-7.424-7.424l1.757-1.757a.75.75 0 111.06 1.06l-1.757 1.757a3.75 3.75 0 105.304 5.304l4.5-4.5a3.75 3.75 0 00-1.035-6.037.75.75 0 01-.354-1z"
              clipRule="evenodd"
            />
          </svg>
        </a>
        <div className="flex max-w-fit flex-row items-center rounded-md bg-gray-200 px-3 py-2 dark:bg-gray-800">
          <span className="mr-3 text-sm font-semibold">Repo</span>
          <SocialIcon kind="github" href={repo} size={5} />
        </div>
      </div>
    </div>
  </Link>
)

export default ProjectCard
