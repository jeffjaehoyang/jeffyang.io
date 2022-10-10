import Facebook from './facebook.svg'
import Github from './github.svg'
import Linkedin from './linkedin.svg'
import Mail from './mail.svg'
import Meta from './meta.svg'
import Twitter from './twitter.svg'
import Youtube from './youtube.svg'
import Esri from './esri.svg'
import Knowru from './knowru.svg'
import Fumi from './fumi.svg'
import FacebookLetter from './facebook-letter.svg'
import Spotify from './spotify.svg'

const components = {
  mail: Mail,
  github: Github,
  facebook: Facebook,
  youtube: Youtube,
  linkedin: Linkedin,
  twitter: Twitter,
  meta: Meta,
  esri: Esri,
  knowru: Knowru,
  fumi: Fumi,
  facebookLetter: FacebookLetter,
  spotify: Spotify,
}

const SocialIcon = ({ kind, href, size = 8 }) => {
  if (!href || (kind === 'mail' && !/^mailto:\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(href)))
    return null

  const SocialSvg = components[kind]

  return (
    <a
      className="text-sm text-gray-500 transition hover:text-gray-600"
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      <span className="sr-only">{kind}</span>
      <SocialSvg className={`fill-current text-gray-700 dark:text-gray-200 h-${size} w-${size}`} />
    </a>
  )
}

export default SocialIcon
