 // should blog posts be displayed?
export const displayProfile = (profileData) => {
  let profileSize = profileData.profile.length

  return (profileData !== undefined && profileSize > 0 && profileData.loading === false)
}

export const displayBlogPosts = (gitPostsData) => {
  //  let gitPosts = this.props.gitPostsData
    let gitPostsSize = gitPostsData.gitPosts.length

    return (gitPostsData !== undefined && gitPostsSize > 0 && gitPostsData.loading === false)
  }
// should photos be displayed?
export const displayPhotos = (photosData) => {
    let photos = photosData.photos

    return (photos.drawings.length > 0 && photos.digital.length > 0 && photos.signature.length > 0 && photos.paintings.length > 0)
  }
// should projects be displayed?
export const displayProjects = (projectsData) => {
    let projectsSize = projectsData.projects.length

    return (projectsData !== undefined && projectsSize > 0 && projectsData.loading === false)
  }

  export const display = (propsData) => {
    let gitPostsData = propsData.gitPostsData;
    let photosData = propsData.photosData;
    let projectsData = propsData.projectsData;
    let profileData = propsData.profileData;

    return (displayBlogPosts(gitPostsData) && displayPhotos(photosData) && displayProjects(projectsData) && displayProfile(profileData)) ? true : false
  }
