import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub'
import { faTelegram } from '@fortawesome/free-brands-svg-icons/faTelegram'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

const AppHome = () => {
  return (
    <div className="flex flex-col gap-[10px]">
      <div className="flex flex-col gap-[5px]">
        <h3 className="leading-none text-xl font-bold">
          J-SNKRS — yours way into sneakers!
        </h3>
        <span className="text-muted-foreground">
          Custom Nike SNKRS from JAPAN
        </span>
      </div>
      <Link to={'/products'} className="text-muted hover:underline">
        Browse catalog...
      </Link>
      <div className="flex gap-[5px]">
        <a href="https://github.com/artndev">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://t.me/artndev">
          <FontAwesomeIcon icon={faTelegram} />
        </a>
      </div>
    </div>
  )
}

export default AppHome
