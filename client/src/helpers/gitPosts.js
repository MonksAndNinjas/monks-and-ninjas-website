import { BASE64 } from 'js-base64';

export const handleGitPosts = (gitHash) => {
  if (gitHash.postsLoading === false && gitHash.gitPosts.length > 0) {
    let posts = gitHash.gitPosts

    let contentArray = posts.map(post => Base64.decode(post.content))
    console.log(contentArray)
  }
}
