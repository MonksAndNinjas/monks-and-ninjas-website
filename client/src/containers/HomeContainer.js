import React from 'react';

import HomeAnchor from '../components/Home/HomeAnchor';
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
        <button className="button" value="postAnchor" onClick={event => this.handleClick(event)}>Blog</button>
        <button className="button" value="projectAnchor" onClick={event => this.handleClick(event)}>Portfolio</button>
        <button className="button" value="artAnchor" onClick={event => this.handleClick(event)}>Art</button>
        <button className="button" value="aboutAnchor" onClick={event => this.handleClick(event)}>About Me</button>


        <HomeAnchor anchorId={"postAnchor"} header={"Posts News"} />
        <HomeAnchor anchorId={"projectAnchor"} header={"Project News"} />
        <HomeAnchor anchorId={"artAnchor"} header={"Art News"} />
        <HomeAnchor anchorId={"aboutAnchor"} header={"About Me"} />
      </div>
    )
  }
}

export default HomeContainer;
