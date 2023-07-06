//styles
import "./AboutWeb.css"

//router
import { Link } from "react-router-dom"

//hooks
import { useFirestoreQuery } from "../../hooks/useFiestoreQuery"

export default function AboutWeb() {
	const { data: posts } = useFirestoreQuery("web-dev")

	return (
		<>
			{posts &&
				posts.map((post) => (
					<div key={post.id} className='singlePost'>
						<span className='postTitle'>{post.title}</span>
						<p className='postText'>{post.article}</p>
						<Link className='see-more' to={`/posts/${post.id}`}>more...</Link>
						<br />
						<br />
						<Link to={`/${post.tag}`} className='postTopic'>#{post.tag}</ Link>
					</div>
				))}
		</>
	)
}
