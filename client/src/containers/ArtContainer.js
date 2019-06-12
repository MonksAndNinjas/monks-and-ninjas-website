import React from 'react';
// connects to store and allows use of functions in /actions
import { connect } from 'react-redux';

class ArtContainer extends React.Component {
  render() {
    return (
      <div className="container">
        My ArtWork!!!
      </div>
    )
  }
}
// makes photos from store accessable
const mapStateToProps = state => {
  console.log(state)
  return({
    photos: state.photos
  })
}

export default connect(mapStateToProps)(ArtContainer);
