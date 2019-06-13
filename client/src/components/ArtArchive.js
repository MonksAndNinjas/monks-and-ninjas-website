import React from 'react';

class ArtArchive extends React.Component {

  handleClick = event => {
    event.preventDefault();

  }

  render() {
    console.log(this.props.photos)
    const renderDigital = this.props.photos[0].map((photo, index) => (
        <ul id={`digital-${index}`} key={index}>
          <button value={index} onClick={event => this.handleClick(event)}>
            <img id={index} style={{ width: '20%', height: '20%' }} src={photo.download_url} alt={photo.name} />
          </button>
        </ul>
    ));

    const renderDrawings = this.props.photos[1].map((photo, index) => (
        <ul id={`drawing-${index}`} key={index}>
          <button value={index} onClick={event => this.handleClick(event)}>
            <img id={index} style={{ width: '20%', height: '20%' }} src={photo.download_url} alt={photo.name} />
          </button>
        </ul>
    ));

    const renderPaintings = this.props.photos[2].map((photo, index) => (
        <ul id={`painting-${index}`} key={index}>
          <button value={index} onClick={event => this.handleClick(event)}>
            <img id={index} style={{ width: '20%', height: '20%' }} src={photo.download_url} alt={photo.name} />
          </button>
        </ul>
    ));

    const renderSignatures = this.props.photos[3].map((photo, index) => (
        <ul id={`painting-${index}`} key={index}>
          <button value={index} onClick={event => this.handleClick(event)}>
            <img id={index} style={{ width: '20%', height: '20%' }} src={photo.download_url} alt={photo.name} />
          </button>
        </ul>
    ));

    return (
      <div className="artsWrapper">
        Art work goes here!!
        {renderSignatures}
        {renderPaintings}
        {renderDigital}
        {renderDrawings}
      </div>
    )
  }
}

export default ArtArchive;
