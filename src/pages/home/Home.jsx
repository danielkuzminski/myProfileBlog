//styles
import "./Home.css"

//components
import Posts from "../../components/Posts"
import Sidebar from "../../components/Sidebar"

export default function Home() {
	return (
		<>
			<div className='home'>
				<Posts />
				<Sidebar />
			</div>
		</>
	)
}
