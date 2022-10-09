import { allAuthors } from 'contentlayer/generated'
import { InferGetStaticPropsType } from 'next'

import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'

export const getStaticProps = async () => {
  const author = allAuthors.find((p) => p.name === 'Jeff Yang')
  return { props: { author } }
}

const About = ({ author }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { name } = author

  return (
    <>
      <PageSEO title={`About - ${name}`} description={`About me - ${name}`} />
      <div className="">
        <div className="mb-8">
          <div className="text-lg font-extrabold leading-6 tracking-tight text-gray-900 dark:text-gray-200">
            A Little About Myself
          </div>
          <div className="mt-2 text-2xl font-extrabold leading-6">{siteMetadata.description}</div>
        </div>
        <div className="mb-2 font-bold">Hey, I'm Jeff 👋</div>
        <div className="mb-8">
          Welcome to my personal corner of the internet! I created this blog for myself to freely
          share thoughts and document my progress as a software engineer. I have benefited immensely
          from the generous and welcoming programming community who share their knowledge with
          others. I hope to replicate that learning experience for others through this blog!
        </div>
        <div className="mb-3 font-bold">Where am I from?</div>
        <div className="mb-8">
          I was born and raised in Seoul / I went to college in Evanston / I live in New York City
        </div>
        <div className="mb-3 font-bold">What's my job?</div>
        <div className="mb-8">
          I'm a software engineer at Meta. Specifically, I'm builiding the backend & infrastructure
          of checkout experiences across Meta's Family of Apps (including Facebook & Instagram).
        </div>
        <div className="mb-3 font-bold">When did I start programming?</div>
        <div className="mb-8">
          My first ever programming experience was in freshman year of college.
        </div>
        <div className="mb-3 font-bold">Why do I like to code?</div>
        <div className="mb-8">
          I love to build and create software & products that impact the world in a positive way.
          It's a great feeling to be able to help others through technology!
        </div>
        <div className="mb-3 font-bold">What technologies interest me?</div>
        <div className="mb-8">
          I am still in the process of exploring many different areas of software engineering. So
          far, I've found passion in delivering high quality end-products to users and in the art of
          finding the right balance between business and engineering - although ultimately, I
          believe that software engineers also exist to add value to businesses. I especially enjoy
          exploring web technologies. I love how the technologies related to the web are rapidly
          developing and constantly changing for the better. Bottom-line: still have lots to learn
          😉
        </div>
      </div>
    </>
  )
}

export default About
