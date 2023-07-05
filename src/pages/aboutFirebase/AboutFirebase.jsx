//styles
import "./AboutFirebase"

//hooks
import { useFirestoreQuery } from "../../hooks/useFiestoreQuery"

export default function AboutFirebase() {
	const { data: posts } = useFirestoreQuery("firebase")

	return (
		<>
			{posts &&
				posts.map((post) => (
					<div key={post.id} className='singlePost'>
						<span className='postTitle'>{post.title}</span>
						<p className='postText'>{post.article}</p>
						<br />
						<p className='postTopic'>#{post.tag}</p>
					</div>
				))}
		</>
	)
}
