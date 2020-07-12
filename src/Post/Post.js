import React from 'react'
import '../index.css';
import {Liwink, Link} from 'react-router-dom'



export default function Post({post}) {  
  return(
  <li className='li'><Link to={`/post/${post.id}`}>{post.title}{post.author}{post.description}</Link></li>
  )
}