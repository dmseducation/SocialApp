import React from 'react'
import "./feed.css"
import Share from '../share/Share'
import Post from '../Post/Post'
export default function Feed() {
  return (
    <div className='feed'>
     <div className="feedWrapper">
      <Share/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      
     </div>
    </div>
  )
}
