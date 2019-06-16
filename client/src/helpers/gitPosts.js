// import for decoding content from Github API
import { Base64 } from 'js-base64';
// helper function that compiles github data into proper format
export const handleGitPosts = (gitPostsData) => {
  // don't do anything if there are no gitPosts data to compile
  if (gitPostsData.loading === false && gitPostsData.gitPosts.length > 0) {
    let posts = gitPostsData.gitPosts
    // parses and collects all the post data
    let contentArray = posts.map((post) => {
      let data = Base64.decode(post.content)
      let parseData = data.split("---")
      let title = parseData[1].split("title:      ")[1].split("date:     ")[0].split('"')[1]
      let parseHeader = parseData[1].split("title:")[1].split("date:       ")[1].split("permalink: ")
      // post hash used for rendering github posts
      let gitPost = {
        title: title,
        content: parseData[2],
        datePublished: new Date(parseHeader[0]).toString(),
        lastPublished: new Date(parseHeader[0]).toString()
      }

      return gitPost
    });

    return contentArray
  }
}
