import React from 'react';

class HomeAnchor extends React.Component {
  render() {
    return (
      <div id={this.props.anchorId}>
        <h1>{this.props.header}</h1>
        <div className="content" style={{ height: '500px' }}></div>
      </div>
    )
  }
}

export default HomeAnchor;
