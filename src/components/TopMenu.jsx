import './TopMenu.css'
import profile from '../assets/profil.jpg'

export default function TopMenu() {
  return (
    <div className='top'>
      <div className="topLeft">
        <i className="topIcon fa-brands fa-square-github"></i>
        <i className="topIcon fa-brands fa-linkedin"></i>
        <i className="topIcon fa-brands fa-square-facebook"></i>
        <i className="topIcon fa-brands fa-square-instagram"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">Domowa</li>
          <li className="topListItem">React</li>
          <li className="topListItem">Firebase</li>
          <li className="topListItem">Web-dev</li>
          <li className="topListItem">o mnie</li>
        </ul>
      </div>
      <div className="topRight">
        <img className='topImg' src={profile} alt="this is us" />
        <i class="searchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  )
}