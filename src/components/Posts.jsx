//styles
import './Posts.css'

//hooks
import { useFirebaseData } from '../hooks/useFirebaseData'
// import { useCollection } from '../hooks/useCollection'

//router
import { Link } from 'react-router-dom'

export default function Posts() {

  //real time data
  // const {data: posts} = useCollection('articles')

  //cloud data
  const {data: posts} = useFirebaseData('articles')

  return (
    <div className='posts'>{posts && posts.map((post) => (
      <div key={post.id} className='singlePost'>
        <span className='postTitle'>{post.title}</span>
        <p className='postText'>{post.article}</p>
        <Link className='see-more' to={`/posts/${post.id}`}>more...</Link>
        <br />
        <br />
        <p className='postTopic'>#{post.tag}</p>
      </div>
    ))}
    </div>
  )
}
