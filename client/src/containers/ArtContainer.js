import React from 'react';
// imports art component
import Art from '../components/Art/Art';
import ArtArchive from '../components/Art/ArtArchive';
// connects to store and allows use of functions in /actions
import { connect } from 'react-redux';
// styling
import '../css/artContainer.css';
// handles rendering of all art elements
class ArtContainer extends React.Component {
  // should photos be displayed?
  displayPhotos = () => {
    let photos = this.props.photosData.photos

    return (photos.drawings.length > 0 && photos.digital.length > 0 && photos.signature.length > 0 && photos.paintings.length > 0)
  }

  render() {
    return (
      <div className="container">
        <h1>Art</h1>

        { this.displayPhotos() ? (
          <div className="artsWrapper">
            <React.Fragment>
              <ArtArchive category={this.props.photosData.photos.signature} type={"signature"} />
              <ArtArchive category={this.props.photosData.photos.paintings} type={"paintings"} />
              <ArtArchive category={this.props.photosData.photos.digital} type={"digital"} />
              <ArtArchive category={this.props.photosData.photos.drawings} type={"drawings"} />
            </React.Fragment>
            <Art />
          </div>
          ) : (
            null
          )}
      </div>
    )
  }
}
// makes photos from store accessable
const mapStateToProps = state => {
  return({
    photosData: state.photos
  })
}

export default connect(mapStateToProps)(ArtContainer);
