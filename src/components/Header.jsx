//styles
import './Header.css'

//assets
import head from '../assets/headerImg.jpg'

export default function Header() {
  return (
    <div className='header'>
        <div className="headerTitles">
            <span className='headerTitleLarge'>Front end dev blog</span>
            <span className='headerTitleSmall'>React i firebase</span>
        </div>
        <img className='headerImg' src={head} alt="programming code" />
    </div>
  )
}
