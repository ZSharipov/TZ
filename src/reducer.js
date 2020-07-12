const initialState={
  posts: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'POSTS_LOADED':
      return 
    default:
      return state
  }
}

export default reducer;