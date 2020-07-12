import React from "react";
import "../index.css";
import Post from "./Post";
import {Link} from 'react-router-dom'

export default function PostList({ posts }) {
  return (
    <div>
      <ul className="ul">
        {posts.map((post) => {
          return <Post post={post} key={post.id} />;
        })}
      </ul>
      <Link to='/add-post'>Add</Link>
    </div>
  );
}
