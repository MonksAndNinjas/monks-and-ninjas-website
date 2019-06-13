import React from 'react';

class ArtArchive extends React.Component {

  handleClick = event => {
    event.preventDefault();

  }

  render() {

    const renderPhotos = this.props.photos.map((photo, index) => (
      <ul id={`art-${index}`} key={index}>
        <button value={index} onClick={event => this.handleClick(event)}>
          <img id={index} style={{ width: '20%', height: '20%' }} src={photo.download_url} alt={photo.name} />
        </button>
      </ul>
    ));

    return (
      <div className="artsWrapper">
        Art work goes here!!
        {renderPhotos}
      </div>
    )
  }
}

export default ArtArchive;
