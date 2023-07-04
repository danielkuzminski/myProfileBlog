import "./AboutWeb.css"

import { useFirestoreQuery } from "../../hooks/useFiestoreQuery"

export default function AboutWeb() {
	const { data: posts } = useFirestoreQuery("web-dev")

	return (
		<div>
			{posts &&
				posts.map((post) => (
					<div key={post.id} className='singlePost'>
						<span className='postTitle'>{post.title}</span>
						<p className='postText'>{post.article}</p>
						<br />
						<p className='postTopic'>#{post.tag}</p>
					</div>
				))}
		</div>
	)
}
