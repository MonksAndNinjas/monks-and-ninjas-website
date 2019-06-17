import React from 'react';

import HomeAnchor from '../components/Home/HomeAnchor';
// styling
import '../css/homeContainer.css'
// renders Home page
class HomeContainer extends React.Component {

  handleClick = event => {
    event.preventDefault()
    let top = document.getElementById(event.target.value)

    top.scrollIntoView();
  }

  render() {
    return (
      <div className="container">
        <h1>Home Page!</h1>
        <div className="homeHeaderWrapper" style={{ height: '500px' }}>
          <div className="homeButtonWrapper">
            <button value="postAnchor" onClick={event => this.handleClick(event)}><span>Posts</span></button><br/>
            <button value="projectAnchor" onClick={event => this.handleClick(event)}><span>Projects</span></button><br/>
            <button value="artAnchor" onClick={event => this.handleClick(event)}><span>Art</span></button><br/>
            <button value="aboutAnchor" onClick={event => this.handleClick(event)}><span>About Me</span></button><br/>
          </div>
        </div>

        <div className="homeContentWrapper">
          <HomeAnchor anchorId={"postAnchor"} header={"Posts News"} />
          <HomeAnchor anchorId={"projectAnchor"} header={"Project News"} />
          <HomeAnchor anchorId={"artAnchor"} header={"Art News"} />
          <HomeAnchor anchorId={"aboutAnchor"} header={"About Me"} />
        </div>
      </div>
    )
  }
}

export default HomeContainer;
