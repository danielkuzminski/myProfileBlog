import "./Sidebar.css"
import profile from "../assets/profil.jpg"

export default function Sidebar() {
	return (
		<div className='sidebar'>
			<div className='sidebarItem'>
				<span className='sidebarTitle'>About me</span>
				<img className='sidebarImg' src={profile} alt='a picture of me' />
				<p className='sidebarItemText'>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam eius
					odio adipisci illum blanditiis quam aliquid error enim eos fuga.
				</p>
			</div>
			<div className='sidebarItem'>
				<span className='sidebarTitle'>Blog</span>
				<p className='sidebarItemText'>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum libero
					ipsa, in magnam numquam earum alias fugiat reiciendis illo et!
				</p>
			</div>
			<div className='sidebarItem'>
				<span className='sidebarTitle'>Find me at</span>
				<div className='sidebarSocial'>
					<i className='sidebarIcon fa-brands fa-square-github'></i>
					<i className='sidebarIcon fa-brands fa-linkedin'></i>
					<i className='sidebarIcon fa-brands fa-square-facebook'></i>
					<i className='sidebarIcon fa-brands fa-square-instagram'></i>
				</div>
			</div>
		</div>
	)
}
