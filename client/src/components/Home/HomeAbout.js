import React from 'react';

class HomeAbout extends React.Component {
  render() {

    console.log(this.props.profile)

    return (
      <div id="homeAboutWrapper">
        <h2>Write about my philosophy, bio, and hobbies</h2>
      </div>
    )
  }
}

export default HomeAbout;
