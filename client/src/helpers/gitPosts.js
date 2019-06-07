import { Base64 } from 'js-base64';

export const handleGitPosts = (gitPosts) => {
  if (gitPosts.loading === false && gitPosts.gitPosts.length > 0) {
    let posts = gitPosts.gitPosts

    let contentArray = posts.map((post) => {
      let data = Base64.decode(post.content)
      let parseData = data.split("---")
      let parseHeader = parseData[1].split("title:")[1].split("date:       ")[1].split("permalink: ")

      let addPost = {
        title: parseHeader[1],
        content: parseData[2],
        datePublished: new Date(parseHeader[0]).toString(),
        lastPublished: new Date(parseHeader[0]).toString()
      }

      return addPost
    });

    return contentArray
  }
}
