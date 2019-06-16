import React from 'react';
// imports art component
import ArtArchive from '../components/Art/ArtArchive';
import Art from '../components/Art/Art';
// connects to store and allows use of functions in /actions
import { connect } from 'react-redux';
// styling
import '../css/artContainer.css';
// handles rendering of all art elements
class ArtContainer extends React.Component {

  state = {
    photoIndex: 0        // index of photo to be displayed, default is most recent post
  }
  // should photos be displayed?
  displayPhotos = () => {
    let photos = this.props.photosData.photos

    return (photos.drawings.length > 0 && photos.digital.length > 0 && photos.signature.length > 0 && photos.paintings.length > 0)
  }
  // sets state of photo to display
  displayPhoto = (index) => {
    this.setState({ photoIndex: index })
  }
  // changes styling of button to signify that photo was selected and displayed
  changeStyle = (index) => {
    var buttonActive = document.querySelectorAll('button')[index]
    var buttonPrev = document.querySelectorAll('button')[this.state.photoIndex]

    if (index !== this.state.photoIndex) {
      buttonActive.setAttribute("class", "activePhoto");
      buttonPrev.removeAttribute("class")
    }
  }

  render() {
    return (
      <div className="container">
        <h1>Art</h1>

        { this.displayPhotos() ? (
            <div className="photoWrapper">
              <ArtArchive changeStyle={this.changeStyle} displayPhoto={this.displayPhoto} photos={this.props.photosData.photos} />
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

// <Art postIndex={this.state.photoIndex} photos={this.props.photos.photos} />
