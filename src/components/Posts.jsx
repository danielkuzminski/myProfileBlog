//react
import { useState } from 'react'

//styles
import './Posts.css'

export default function Posts() {

  const posts = [
    {id: 1, title: 'first post', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati commodi tempora laboriosam at laborum quam. Aperiam quidem fuga modi harum eum excepturi doloribus sequi, labore error at fugiat quia', topic: 'react'},
    {id: 2, title: 'second post', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati commodi tempora laboriosam at laborum quam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati commodi tempora laboriosam at laborum quam. Aperiam quidem fuga modi harum eum excepturi doloribus sequi, labore error at fugiat quia, suscipit sed omnis maxime laborum consectetur molestiae eaque culpa corporis blanditiis quo. Quia cum voluptates enim, quibusdam sunt velit laborum rem.', topic: 'react'},
    {id: 3, title: 'third post', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati commodi tempora laboriosam at laborum quam. Aperiam quidem fuga modi harum eum excepturi doloribus sequi, labore error at fugiat quia. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati commodi tempora laboriosam at laborum quam. Aperiam quidem fuga modi harum eum excepturi doloribus sequi, labore error at fugiat quia, suscipit sed omnis maxime laborum consectetur molestiae eaque culpa corporis blanditiis quo. Quia cum voluptates enim, quibusdam sunt velit laborum rem.', topic:'firebase'},
    {id: 4, title: 'fourth post', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati commodi tempora laboriosam at laborum quam. Aperiam quidem fuga modi harum eum excepturi doloribus sequi, labore error at fugiat quia, suscipit sed omnis maxime laborum consectetur molestiae eaque culpa corporis blanditiis quo. Quia cum voluptates enim, quibusdam sunt velit laborum rem.', topic: 'web-dev'},
    {id:5, title: 'fifth post', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati commodi tempora laboriosam at laborum quam. Aperiam quidem fuga modi harum eum excepturi doloribus sequi, labore error at fugiat quia. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati commodi tempora laboriosam at laborum quam.', topic: 'firebase'}
  ]

  return (
    <div className='posts'>{posts.map((post) => (
      <div key={post.id} className='singlePost'>
        <span className='postTitle'>{post.title}</span>
        <p className='postText'>{post.body}</p>
        <br />
        <p className='postTopic'>#{post.topic}</p>
      </div>
    ))}</div>
  )
}
