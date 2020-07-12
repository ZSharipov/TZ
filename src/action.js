const postsLoaded= (newPost)=>{
  return{
    type: 'POSTS_LOADED',
    payload: newPost
  }
}

export {
  postsLoaded,
}