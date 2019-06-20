 // should blog posts be displayed?
export const displayBlogPosts = (gitPostsData) => {
  //  let gitPosts = this.props.gitPostsData
    let gitPostsSize = gitPostsData.gitPosts.length

    return (gitPostsData !== undefined && gitPostsSize > 0 && gitPostsData.loading === false)
  }
