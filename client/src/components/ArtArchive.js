import React from 'react';

import { resizeAllGridItems } from './masonryLayout.js';
import { resizeInstance } from './masonryLayout.js';

var imagesLoaded = require('imagesloaded');

class ArtArchive extends React.Component {

  handleClick = event => {
    event.preventDefault();

  }

  render() {

    const renderDigital = this.props.photos.digital.map((photo, index) => (
        <div id={`digital-${index}`} className="item" key={index}>
          <button value={index} className="art" onClick={event => this.handleClick(event)}>
            <img id={index} src={photo.download_url} alt={photo.name} />
            <div className="middle">
              <div className="text">
                <span>{photo.name}</span>
              </div>
            </div>
          </button>
        </div>
    ));

    const renderDrawings = this.props.photos.drawings.map((photo, index) => (
        <div id={`drawing-${index}`} className="item" key={index}>
          <button value={index} className="art" onClick={event => this.handleClick(event)}>
            <img id={index} src={photo.download_url} alt={photo.name} />
            <div className="middle">
              <div className="text">
                <span>{photo.name}</span>
              </div>
            </div>
          </button>
        </div>
    ));

    const renderPaintings = this.props.photos.paintings.map((photo, index) => (
        <div id={`painting-${index}`} className="item" key={index}>
          <button value={index} className="art" onClick={event => this.handleClick(event)}>
            <img id={index} src={photo.download_url} alt={photo.name} />
            <div className="middle">
              <div className="text">
                <span>{photo.name}</span>
              </div>
            </div>
          </button>
        </div>
    ));

    const renderSignatures = this.props.photos.signature.map((photo, index) => (
        <div id={`signature-${index}`} className="item" key={index}>
          <button value={index} className="art" onClick={event => this.handleClick(event)}>
            <img id={index} src={photo.download_url} alt={photo.name} />
            <div className="middle">
              <div className="text">
                <span>{photo.name}</span>
              </div>
            </div>
          </button>
        </div>
    ));

    return (
      <div className="artsWrapper">
        {renderSignatures}
        {renderPaintings}
        {renderDigital}
        {renderDrawings}
      </div>
    )
  }

  componentDidMount() {
    var allArt = document.getElementsByClassName("item")

    for(var x = 0; x < allArt.length; x++){
      imagesLoaded(allArt[x], resizeInstance);
    }

    window.onload = resizeAllGridItems()
    window.addEventListener("resize", resizeAllGridItems)
  }

}

export default ArtArchive;
