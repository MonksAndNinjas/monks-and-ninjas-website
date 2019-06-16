import React from 'react';
// renders Home page
class HomeContainer extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>Home Page!</h1>
        <p><a href="#postAnchor">Blog</a></p>
        <p><a href="#projectAnchor">Portfolio</a></p>
        <p><a href="#artAnchor">Art</a></p>
        <p><a href="#aboutAnchor">About Me</a></p>
      </div>
    )
  }
}

export default HomeContainer;
