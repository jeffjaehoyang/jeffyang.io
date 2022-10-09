import ProjectCard from '@/components/ProjectCard'
import { PageSEO } from '@/components/SEO'
import projectsData from '@/data/projectsData'
import siteMetadata from '@/data/siteMetadata'

export default function Projects() {
  return (
    <>
      <PageSEO title={`Projects - ${siteMetadata.author}`} description={siteMetadata.description} />
      <div>
        <div className="mb-8">
          <div className="text-lg font-extrabold tracking-tight text-gray-900 dark:text-gray-200">
            Projects
          </div>
          <div className="text-2xl font-extrabold">
            First do it, then do it right, then do it better.
          </div>
        </div>
        <div className="container">
          <div className="flex flex-wrap">
            {projectsData.map((d) => (
              <ProjectCard
                key={d.title}
                title={d.title}
                description={d.description}
                href={d.href}
                repo={d.repo}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
