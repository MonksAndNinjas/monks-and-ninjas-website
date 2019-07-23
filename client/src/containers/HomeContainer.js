import React from 'react';
// connects to store
import { connect } from 'react-redux';
// renders content for it's respective anchor
import HomeBlog from '../components/Home/HomeBlog';
import HomePortfolio from '../components/Home/HomePortfolio';
import HomeArt from '../components/Home/HomeArt';
import HomeAbout from '../components/Home/HomeAbout';
// functions to decide if content should be displayed
import { display } from '../helpers/displayContent';
// generates random number within projects array length
import { makeRandomRange } from '../helpers/makeRandomRange';
import { handleGitPosts } from '../helpers/gitPosts';
// image
import drawing from '../images/mainpagedrawing.jpg'
import homeDrawing from '../images/homeDrawing.svg';
// styling
import '../css/homeContainer.css'
// renders Home page
class HomeContainer extends React.Component {
  handleClick = event => {
    event.preventDefault();
    event.persist();
    let top = document.getElementById(event.target.attributes[0].value)

    if (top) {
      top.scrollIntoView({ behavior: 'smooth' });
    }
  }
  // random values that will highlight content from specific anchor
  generateValues = range => {
    var generate = makeRandomRange(range)
    var x1 = generate(),
        x2 = generate(),
        x3 = generate();

    return [x1, x2, x3]
  }
  // returns length of all photos combined
  photosLength = () => {
    var drawingsLength = this.props.photosData.photos.drawings.length;
    var paintingsLength = this.props.photosData.photos.paintings.length;
    var digitalsLength = this.props.photosData.photos.digital.length;
    var signatureLength = this.props.photosData.photos.signature.length;

    return drawingsLength + paintingsLength + digitalsLength + signatureLength
  }
  // returns array of all photos combined
  combinePhotos = () => {
    return [...this.props.photosData.photos.drawings, ...this.props.photosData.photos.signature, ...this.props.photosData.photos.digital, ...this.props.photosData.photos.paintings]
  }

  constructContactData = () => {
    return [this.props.profileData.profile[0][0].phone, this.props.profileData.profile[0][0].email, this.props.profileData.profile[0][0].github]
  }
  // consider moving homeHeaderWrapper and homeAnchorWrapper to their own component
  render() {
    //console.log(this.props)
    return (
      <div className="container">
        <div className="homeHeaderWrapper" style={{ height: '500px' }}>
          <div className="homeButtonWrapper">
            <button value="postAnchor" onClick={event => this.handleClick(event)}><span value="postAnchor">Posts</span></button><br/>
            <button value="portfolioAnchor" onClick={event => this.handleClick(event)}><span value="portfolioAnchor">Projects</span></button><br/>
            <button value="artAnchor" onClick={event => this.handleClick(event)}><span value="artAnchor">Art</span></button><br/>
            <button value="aboutAnchor" onClick={event => this.handleClick(event)}><span value="aboutAnchor">About Me</span></button><br/>
          </div>
          <div className="homeImage">
            <img src={homeDrawing} alt='homeDrawing' />
          </div>
        </div>

        <div className="homeAnchorWrapper">
          <div id="postAnchor">
            <h1>Posts News</h1>
            <div className="content">
              { display(this.props) ? (
                  <HomeBlog posts={handleGitPosts(this.props.gitPostsData)} indexArray={this.generateValues(this.props.gitPostsData.gitPosts.length)} />
                ) : (
                  null
              )}
            </div>
          </div>

          <div id="portfolioAnchor">
            <h1>Project News</h1>
            <div className="content">
              { display(this.props) ? (
                  <HomePortfolio projects={this.props.projectsData.projects} indexArray={this.generateValues(this.props.projectsData.projects.length)} />
                ) : (
                  null
              )}
            </div>
          </div>

          <div id="artAnchor">
            <h1>Art News</h1>
            <div className="content">
              { display(this.props) ? (
                  <HomeArt photosArray={this.combinePhotos()} indexArray={this.generateValues(this.photosLength())} />
                ) : (
                  null
              )}
            </div>
          </div>

          <div id="aboutAnchor">
            <h1>About Me</h1>
            <div className="content">
              { display(this.props) ? (
                  <HomeAbout profileData={this.props.profileData.profile[0][0]} resources={this.constructContactData()} technicalSkills={this.props.profileData.profile[0][1]} miscSkills={this.props.profileData.profile[0][2]} />
                ) : (
                  null
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
// makes data from store accessable
const mapStateToProps = state => {
  //console.log(state)
  return({
    gitPostsData: state.gitPosts,
    projectsData: state.projects,
    photosData: state.photos,
    profileData: state.profile
  })
}

export default connect(mapStateToProps)(HomeContainer);
