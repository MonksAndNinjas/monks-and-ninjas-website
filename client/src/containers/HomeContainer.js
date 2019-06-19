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
              <HomeBlog />
            </div>
          </div>

          <div id="portfolioAnchor">
            <h1>Project News</h1>
            <div className="content">
              <HomePortfolio />
            </div>
          </div>

          <div id="artAnchor">
            <h1>Art News</h1>
            <div className="content">
              <HomeArt />
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
