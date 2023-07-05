//styles
import "./SinglePost.css"

//router
import { useParams } from "react-router-dom"

//firebase
import { db } from "../../firebase/config"
import { getDoc, doc } from "firebase/firestore"

//react
import { useEffect, useState } from "react"

export default function SinglePost() {
	const { id } = useParams()

	const [post, setPost] = useState(null)

	useEffect(() => {
		let ref = doc(db, "articles", id)

		getDoc(ref).then((snapshot) => {
			setPost(snapshot.data())
		})
	}, [])

	return (
		<>
			{post && (
				<div className='singlePost'>
					<span className='postTitle'>{post.title}</span>
					<p className='singlePostText'>{post.article}</p>
				</div>
			)}
		</>
	)
}
