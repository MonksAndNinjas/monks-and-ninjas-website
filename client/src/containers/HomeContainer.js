import React from 'react';
// connects to store
import { connect } from 'react-redux';
// renders content for it's respective anchor
import HomeBlog from '../components/Home/HomeBlog';
import HomePortfolio from '../components/Home/HomePortfolio';
import HomeArt from '../components/Home/HomeArt';
import HomeAbout from '../components/Home/HomeAbout';
// functions to decide if content should be displayed
import { displayBlogPosts } from '../helpers/displayContent';
import { displayPhotos } from '../helpers/displayContent';
import { displayProjects } from '../helpers/displayContent';
// generates random number within projects array length
import { makeRandomRange } from '../helpers/makeRandomRange';
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

  generateValues = range => {
    var generate = makeRandomRange(range)
    var x1 = generate(),
        x2 = generate(),
        x3 = generate();

    return [x1, x2, x3]
  }

  photosLength = () => {
    var drawingsLength = this.props.photosData.photos.drawings.length;
    var paintingsLength = this.props.photosData.photos.paintings.length;
    var digitalsLength = this.props.photosData.photos.digital.length;
    var signatureLength = this.props.photosData.photos.signature.length;

    return drawingsLength + paintingsLength + digitalsLength + signatureLength
  }

  combinePhotos = () => {
    return [...this.props.photosData.photos.drawings, ...this.props.photosData.photos.signature, ...this.props.photosData.photos.digital, ...this.props.photosData.photos.paintings]
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
              { displayBlogPosts(this.props.gitPostsData) ? (
                  <HomeBlog posts={this.props.gitPostsData.gitPosts} indexArray={this.generateValues(this.props.gitPostsData.gitPosts.length)} />
                ) : (
                  null
              )}
            </div>
          </div>

          <div id="portfolioAnchor">
            <h1>Project News</h1>
            <div className="content">
              { displayProjects(this.props.projectsData) ? (
                  <HomePortfolio projects={this.props.projectsData.projects} indexArray={this.generateValues(this.props.projectsData.projects.length)} />
                ) : (
                  null
              )}
            </div>
          </div>

          <div id="artAnchor">
            <h1>Art News</h1>
            <div className="content">
              { displayPhotos(this.props.photosData) ? (
                  <HomeArt photosArray={this.combinePhotos()} indexArray={this.generateValues(this.photosLength())} />
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
// makes data from store accessable
const mapStateToProps = state => {
  return({
    gitPostsData: state.gitPosts,
    projectsData: state.projects,
    photosData: state.photos
  })
}

export default connect(mapStateToProps)(HomeContainer);
