import React from 'react';

class HomeAnchor extends React.Component {
  render() {
    return (
      <div id={this.props.anchorId}>
        <h1>{this.props.header}</h1>
        <p style={{ height: '1500px' }}></p>
      </div>
    )
  }
}

export default HomeAnchor;
