import React from 'react';
// connects to store
import { connect } from 'react-redux';
// renders content for it's respective anchor
import HomeBlog from '../components/Home/HomeBlog';
import HomePortfolio from '../components/Home/HomePortfolio';
import HomeArt from '../components/Home/HomeArt';
import HomeAbout from '../components/Home/HomeAbout';
// styling
import '../css/homeContainer.css'
// renders Home page
class HomeContainer extends React.Component {

  handleClick = event => {
    event.preventDefault()
    let top = document.getElementById(event.target.value)

    if (top) {
      top.scrollIntoView();
    }
  }

  displayPhotos = () => {
    let photos = this.props.photosData.photos

    return (photos.drawings.length > 0 && photos.digital.length > 0 && photos.signature.length > 0 && photos.paintings.length > 0)
  }
  // should blog posts be displayed?
  displayBlogPosts = () => {
    let gitPosts = this.props.gitPostsData
    let gitPostsSize = gitPosts.gitPosts.length

    return (gitPosts !== undefined && gitPostsSize > 0 && gitPosts.loading === false)
  }

  displayProjects = () => {
    let projects = this.props.projectsData
    let projectsSize = this.props.projectsData.projects.length

    return (projects !== undefined && projectsSize > 0 && projects.loading === false)
  }
  // consider moving homeHeaderWrapper and homeAnchorWrapper to their own component
  render() {
    return (
      <div className="container">
        <h1>Home Page!</h1>
        <div className="homeHeaderWrapper" style={{ height: '500px' }}>
          <div className="homeButtonWrapper">
            <button value="postAnchor" onClick={event => this.handleClick(event)}><span>Posts</span></button><br/>
            <button value="portfolioAnchor" onClick={event => this.handleClick(event)}><span>Projects</span></button><br/>
            <button value="artAnchor" onClick={event => this.handleClick(event)}><span>Art</span></button><br/>
            <button value="aboutAnchor" onClick={event => this.handleClick(event)}><span>About Me</span></button><br/>
          </div>
        </div>

        <div className="homeAnchorWrapper">
          <div id="postAnchor">
            <h1>Posts News</h1>
            <div className="content">
              { this.displayBlogPosts() ? (
                  <HomeBlog posts={this.props.gitPostsData.gitPosts} />
                ) : (
                  null
              )}
            </div>
          </div>

          <div id="portfolioAnchor">
            <h1>Project News</h1>
            <div className="content">
              { this.displayProjects() ? (
                  <HomePortfolio projects={this.props.projectsData.projects} />
                ) : (
                  null
              )}
            </div>
          </div>

          <div id="artAnchor">
            <h1>Art News</h1>
            <div className="content">
              { this.displayPhotos() ? (
                  <HomeArt photos={this.props.photosData.photos} />
                ) : (
                  null
              )}
            </div>
          </div>

          <div id="aboutAnchor">
            <h1>About Me</h1>
            <div className="content">
              <HomeAbout />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return({
    postsData: state.posts,
    gitPostsData: state.gitPosts,
    projectsData: state.projects,
    photosData: state.photos
  })
}

export default connect(mapStateToProps)(HomeContainer);
