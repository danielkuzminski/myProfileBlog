//styles
import './AboutReact.css'

import { useFirestoreQuery } from '../../hooks/useFiestoreQuery'

export default function AboutReact() {

  const {data: posts} = useFirestoreQuery('react')

  return (
    <div>
      {posts && posts.map((post) => (
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
