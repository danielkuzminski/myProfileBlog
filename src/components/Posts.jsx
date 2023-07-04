
//styles
import './Posts.css'

// import { useCollection } from '../hooks/useCollection'
import { useFirebaseData } from '../hooks/useFirebaseData'

export default function Posts() {

  //real time data (working!)
  // const {data: posts} = useCollection('articles')

  //data
  const {data: posts} = useFirebaseData('articles')

  return (
    <div className='posts'>{posts && posts.map((post) => (
      <div key={post.id} className='singlePost'>
        <span className='postTitle'>{post.title}</span>
        <p className='postText'>{post.article}</p>
        <br />
        <p className='postTopic'>#{post.tag}</p>
      </div>
    ))}</div>
  )
}
