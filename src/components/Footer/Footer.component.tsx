import { FaDiscord, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import waveSvg from '../../assets/wave.svg'
import Wave from './Wave.component'

const Footer = () => {
  return (
    <footer className="text-center text-sm">
      <Wave />
      <Wave />
      <div className="bg-primary px-auto flex max-w-full-md flex-col items-stretch justify-around gap-4 md:flex-row">
        <nav className="my-2">
          <h3 className="mb-2 text-3xl text-background">Social Media Links</h3>
          <ul className="flex items-center justify-center gap-4">
            <li className="transition-colors duration-300 text-onPrimary hover:text-instagram">
              <a
                href="https://www.instagram.com/uwindsor_eng4.0/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram size="1.75rem" />
              </a>
            </li>
            <li className="transition-colors duration-300 text-onPrimary hover:text-github">
              <a
                href="https://github.com/engineering4-0/website"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size="1.75rem" />
              </a>
            </li>
            <li className="transition-colors duration-300 text-onPrimary hover:text-linkedin">
              <a
                href="https://www.linkedin.com/company/engineering-4-0/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size="1.75rem" />
              </a>
            </li>

            <li className="transition-colors duration-300 text-onPrimary hover:text-discord">
              <a
                href="https://discord.com/invite/Z8JnPSC5tD"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaDiscord size="1.75rem" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="bg-primary px-auto py-4 max-w-full-sm text-background">
        Copyrights &copy; {new Date().getFullYear()} &nbsp; Engineering 4.0
      </div>
    </footer>
  )
}

export default Footer
