//styles
import './Header.css'

//assets
import head from '../assets/headerImg.jpg'

export default function Header() {
  return (
    <div className='header'>
        <div className="headerTitles">
            <span className='headerTitleLarge'>React i Firebase</span>
            <span className='headerTitleSmall'>Jak przełożyć teorię w praktykę</span>
        </div>
        <img className='headerImg' src={head} alt="programming code" />
    </div>
  )
}
