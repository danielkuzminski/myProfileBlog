import "./Sidebar.css"
import profile from "../assets/profil.jpg"

export default function Sidebar() {
	return (
		<div className='sidebar'>
			<div className='sidebarItem'>
				<span className='sidebarTitle'>O mnie</span>
				<img className='sidebarImg' src={profile} alt='zdjęcie bloggera' />
				<p className='sidebarItemText'>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam eius
					odio adipisci illum blanditiis quam aliquid error enim eos fuga.
				</p>
			</div>
			<div className='sidebarItem'>
				<span className='sidebarTitle'>O blogu</span>
				<p className='sidebarItemText'>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum libero
					ipsa, in magnam numquam earum alias fugiat reiciendis illo et!
				</p>
			</div>
			<div className='sidebarItem'>
				<span className='sidebarTitle'>Znajdź mnie</span>
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
