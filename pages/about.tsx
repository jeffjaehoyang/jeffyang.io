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
      <div>
        <div className="mb-8">
          <div className="text-lg font-extrabold tracking-tight">A Little About Myself</div>
          <div className="text-2xl font-extrabold">{siteMetadata.description}</div>
        </div>
        <div className="mb-2 text-lg font-bold">Hey, I'm Jeff ✌️</div>
        <div className="mb-8">
          Welcome to my personal corner of the internet! I created this blog for myself to freely
          share thoughts and document my progress as a software engineer. I have benefited immensely
          from the generous and welcoming programming community who share their knowledge with
          others. I hope to replicate that learning experience for others through this blog!
        </div>
        <div className="mb-3 text-lg font-bold">Where am I from?</div>
        <div className="mb-8">
          Born and raised in Seoul, South Korea. <br></br>
          Went to college in Evanston, IL. <br></br>
          Currently in New York City. <br></br>
        </div>
        <div className="mb-3 text-lg font-bold">What's my job?</div>
        <div className="mb-8">
          I'm a software engineer at Meta. I am part of a team that builds the backend &
          infrastructure of checkout experiences across Meta's Family of Apps (including Facebook &
          Instagram).
        </div>
        <div className="mb-3 text-lg font-bold">When did I start programming?</div>
        <div className="mb-8">
          My first ever programming experience was in freshman year of college.
        </div>
        <div className="mb-3 text-lg font-bold">Why do I like to code?</div>
        <div className="mb-8">
          I enjoy many different aspects of software enginnering. Nothing beats the feeling of
          building and shipping products that deliver great value to users. In order to build great
          products, of course, there are the technical aspects such as architecture design & API
          design - I greatly enjoy them as well.
        </div>
        <div className="mb-3 text-lg font-bold">
          Do I have any specific technical areas of interest?
        </div>
        <div className="mb-8">
          I am still in the process of exploring different areas of software engineering - I've only
          just started my life as a software engineer. So far, I've found passion in delivering high
          quality end-products to users. Ultimately, I believe that software engineers also exist to
          add value to businesses. While I firmly believe that software engineers should never be
          too isolated from the business needs, I enjoy the unique challenges that software
          engineers face on a daily basis. I find great joy and motivation in solving challenging
          technical problems and in the process of architecting software systems. Bottom-line: still
          have lots to learn 😉
        </div>
      </div>
    </>
  )
}

export default About
