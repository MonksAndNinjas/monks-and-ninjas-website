export const addBlogPost = (blogPost) => {
  return (dispatch) => {
    console.log(blogPost)
    dispatch({ type: 'LOADING_POSTS' });
  }
}
