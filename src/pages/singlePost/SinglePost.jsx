//styles
import "./SinglePost.css"

//router
import { useParams, Link } from "react-router-dom"

//firebase
import { db } from "../../firebase/config"
import { getDoc, doc } from "firebase/firestore"

//react
import { useEffect, useState } from "react"

//hooks
import { useAuthContext } from "../../hooks/useAuthContext"
import { useDeleteDoc } from "../../hooks/useDeleteDoc"

export default function SinglePost() {
	const { id } = useParams()

	const [post, setPost] = useState(null)

	const { user } = useAuthContext()

	//pass deleteDocument function with id inside body of inline function
	const { deleteDocument } = useDeleteDoc()

	useEffect(() => {
		let ref = doc(db, "articles", id)

		getDoc(ref).then((snapshot) => {
			setPost(snapshot.data())
		})
	}, [id])

	return (
		<>
			{post && (
				<div className='singlePost'>
					<span className='postTitle'>{post.title}</span>
					<p className='singlePostText'>{post.article}</p>
					<br />
					<br />
					<div className='bottom-menu'>
						<Link to={`/${post.tag}`} className='postTopic'>
							#{post.tag}
						</Link>
						{user && (
							<i
								onClick={() => {
									deleteDocument(id)
								}}
								className='delete-bin fa-solid fa-trash-can'></i>
						)}
					</div>
				</div>
			)}
		</>
	)
}
