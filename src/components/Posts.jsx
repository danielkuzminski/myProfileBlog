import './Posts.css'

export default function Posts() {

  const posts = [
    {id: 1, title: 'first post', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati commodi tempora laboriosam at laborum quam. Aperiam quidem fuga modi harum eum excepturi doloribus sequi, labore error at fugiat quia'},
    {id: 2, title: 'second post', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati commodi tempora laboriosam at laborum quam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati commodi tempora laboriosam at laborum quam. Aperiam quidem fuga modi harum eum excepturi doloribus sequi, labore error at fugiat quia, suscipit sed omnis maxime laborum consectetur molestiae eaque culpa corporis blanditiis quo. Quia cum voluptates enim, quibusdam sunt velit laborum rem.'},
    {id: 3, title: 'third post', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati commodi tempora laboriosam at laborum quam. Aperiam quidem fuga modi harum eum excepturi doloribus sequi, labore error at fugiat quia. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati commodi tempora laboriosam at laborum quam. Aperiam quidem fuga modi harum eum excepturi doloribus sequi, labore error at fugiat quia, suscipit sed omnis maxime laborum consectetur molestiae eaque culpa corporis blanditiis quo. Quia cum voluptates enim, quibusdam sunt velit laborum rem.'},
    {id: 4, title: 'fourth post', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati commodi tempora laboriosam at laborum quam. Aperiam quidem fuga modi harum eum excepturi doloribus sequi, labore error at fugiat quia, suscipit sed omnis maxime laborum consectetur molestiae eaque culpa corporis blanditiis quo. Quia cum voluptates enim, quibusdam sunt velit laborum rem.'}
  ]

  return (
    <div className='posts'>{posts.map((post) => (
      <div key={post.id} className='singlePost'>
        <span className='postTitle'>{post.title}</span>
        <p className='postText'>{post.body}</p>
      </div>
    ))}</div>
  )
}
