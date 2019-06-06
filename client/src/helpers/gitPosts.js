export const handleGitPosts = (gitHash) => {
  if (gitHash.postsLoading === false && gitHash.gitPosts.length > 0) {
    let posts = gitHash.gitPosts

    console.log(posts)
  //  gitPosts.forEach((post) => {
    //  console.log(post)
  //  });
  }
}
