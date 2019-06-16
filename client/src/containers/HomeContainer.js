import React from 'react';
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
        <button value="postAnchor" onClick={event => this.handleClick(event)}>Blog</button>
        <button value="projectAnchor" onClick={event => this.handleClick(event)}>Portfolio</button>
        <button value="artAnchor" onClick={event => this.handleClick(event)}>Art</button>
        <button value="aboutAnchor" onClick={event => this.handleClick(event)}>About Me</button>


        <p style={{ height: '1500px' }}></p>
        <div id="postAnchor">Posts News</div>
        <p style={{ height: '1500px' }}></p>
        <div id="projectAnchor">Projects News</div>
        <p style={{ height: '1500px' }}></p>
        <div id="artAnchor">Art News</div>
        <p style={{ height: '1500px' }}></p>
        <div id="aboutAnchor">About Me</div>
      </div>
    )
  }
}

export default HomeContainer;
