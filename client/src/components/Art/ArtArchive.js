import React from 'react';
// imports functions to apply masonry layout
import { resizeAllGridItems } from '../../helpers/masonryLayout';
import { resizeInstance } from '../../helpers/masonryLayout';
import { parseTitle } from '../../helpers/artContent';
import { displayArtContent } from '../../helpers/artContent';
// allows use of imagesLoaded
var imagesLoaded = require('imagesloaded');
// renders Art from category passed down from ArtArchive.js
class ArtArchive extends React.Component {
  // when photo is clicked a window pops up to display enlarged photo
  handleClick = event => {
    event.preventDefault();
    event.persist();
    // if clicked on the correct portion of the image
    if (event.target.attributes[1]) {
      var modalImg = document.getElementsByClassName('modal-content')[0]
      var modal = document.getElementById('artWrapper')
      var imgData = event.target.attributes[1].value.split("-")
      var imgId = imgData[1];
      var dataArray = parseTitle(this.props.category[imgId].name);
      var caption = document.getElementById('caption');

      // changes style of modal so it can show individual enlarged photo
      modalImg.setAttribute('src', this.props.category[imgId].download_url)

      modal.style.display = 'block';
      // places caption in at the right height based on image
      setTimeout(function() {
        var imgHeight = document.getElementById('modal-img').getBoundingClientRect().height;
        caption.style.margin = `${imgHeight/2}px auto`;

        displayArtContent(dataArray, caption);
      }, 200)

    }
  }

  render() {

    const renderCategory = this.props.category.map((photo, index) => (
            <div className="artArchiveWrapper" key={index}>
              <button onClick={event => this.handleClick(event)}>
                <img id={index} value={`${this.props.type}-${index}`} src={photo.download_url} alt={photo.name} />
                <div className="middle">
                  <div className="text">
                    <span>{parseTitle(photo.name)[0]}</span>
                  </div>
                </div>
              </button>
            </div>
        ));

    return (
      <>
        {renderCategory}
      </>
    )
  }
  // sets listeners and initiates functions to display masonry layout
  componentDidMount() {
    var allArt = document.getElementsByClassName("artArchiveWrapper")
    // makes sure all images have loaded before applying styles and retrieving information
    for(var x = 0; x < allArt.length; x++){
      imagesLoaded(allArt[x], resizeInstance);
    }

    window.onload = resizeAllGridItems()
    window.addEventListener("resize", resizeAllGridItems)
  }

}

export default ArtArchive;
