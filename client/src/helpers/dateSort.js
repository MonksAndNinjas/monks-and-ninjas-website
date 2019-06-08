// sorts blog posts in order of most recent to oldest
export const dateSort = (a, b) => {
  return new Date(b.lastPublished) - new Date(a.lastPublished)
}
