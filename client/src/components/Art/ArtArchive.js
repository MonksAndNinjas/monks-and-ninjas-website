import React from 'react';
// imports component to display categories
import ArtCategory from './ArtCategory';
// renders all artwork, applies listeners, and masonry layout
class ArtArchive extends React.Component {
  // probably will move const render categories to a different component to simplify code
  render() {
    return (
      <div className="artsWrapper">
        <React.Fragment>
          <ArtCategory category={this.props.photos.signature} type={"signature"} />
          <ArtCategory category={this.props.photos.paintings} type={"paintings"} />
          <ArtCategory category={this.props.photos.digital} type={"digital"} />
          <ArtCategory category={this.props.photos.drawings} type={"drawings"} />
        </React.Fragment>
      </div>
    )
  }
}

export default ArtArchive;
