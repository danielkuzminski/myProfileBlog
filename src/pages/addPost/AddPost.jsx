//react
import { useState } from "react"

//styles
import "./AddPost.css"

//router
import { useNavigate } from "react-router-dom"

//firebase
import { collection, addDoc } from "firebase/firestore"

//firebase config
import { db } from "../../firebase/config"


export default function AddPost() {
	const navigate = useNavigate()
	const [title, setTitle] = useState("")
	const [article, setArticle] = useState("")
	const [tag, setTag] = useState("react")

	const resetForm = () => {
		setTitle("")
		setArticle("")
		setTag('')
	}

	const handleSubmit = async (e) => {
		e.preventDefault()

		const ref = collection(db,'articles')
		
		const data = {
			title,
			article,
			tag,
		}

		await addDoc(ref, data)

		navigate('/')

		resetForm()
	}

	return (
		<div className='addPost'>
			<span
				onClick={() => {
					navigate(-1)
				}}
				className='loginClose'>
				<i class='fa-solid fa-angles-left'></i>
			</span>
			<form onSubmit={handleSubmit} className='addPostForm'>
				<label className='loginLabel'>
					<span>title:</span>
					<input
						type='text'
						className='addPostInput'
						onChange={(e) => {
							setTitle(e.target.value)
						}}
						required
						value={title}
					/>
				</label>
				<label className='loginLabel'>
					<span>article:</span>
					<textarea
						className='addPostInput'
						onChange={(e) => {
							setArticle(e.target.value)
						}}
						required
						value={article}></textarea>
				</label>
				
				<label className="loginLabel">
					<span>topic:</span>
					<select 
						className="addPostSelect"
						onChange={(e) => {
							setTag(e.target.value)
						}}
					>
						<option value='react'>react</option>
						<option value='firebase'>firebase</option>
						<option value='web-dev'>web-dev</option>
					</select>
				</label>
				<button className='SubmitBtn'>submit</button>
			</form>
		</div>
	)
}
