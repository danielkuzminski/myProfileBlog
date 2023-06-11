//styles
import "./Home.css"

//components
import Header from "../../components/Header"
import Posts from "../../components/Posts"
import Sidebar from "../../components/Sidebar"

export default function Home() {
	return (
		<>
			{/* <Header /> */}
			<div className='home'>
				<Posts />
				<Sidebar />
			</div>
		</>
	)
}
