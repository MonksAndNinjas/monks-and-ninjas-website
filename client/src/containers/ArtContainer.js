import React from 'react';
// imports art component
import ArtArchive from '../components/ArtArchive';
import Art from '../components/Art';
// connects to store and allows use of functions in /actions
import { connect } from 'react-redux';

class ArtContainer extends React.Component {
  render() {
    return (
      <div className="container">
        <h2>Art</h2>

        <ArtArchive />
      </div>
    )
  }
}
// makes photos from store accessable
const mapStateToProps = state => {
  return({
    photos: state.photos
  })
}

export default connect(mapStateToProps)(ArtContainer);
