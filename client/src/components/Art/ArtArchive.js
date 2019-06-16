import React from 'react';
// imports functions to apply masonry layout
import { resizeAllGridItems } from '../../helpers/masonryLayout.js';
import { resizeInstance } from '../../helpers/masonryLayout.js';
// allows use of imagesLoaded
var imagesLoaded = require('imagesloaded');
// renders Art from category passed down from ArtArchive.js
class ArtArchive extends React.Component {
  // when photo is clicked a window pops up to display enlarged photo
  handleClick = event => {
    event.preventDefault();
    event.persist();
    // if clicked on the correct portion of theimage
    if (event.target.attributes[1]) {
      var modalImg = document.getElementsByClassName('modal-content')[0]
      var modal = document.getElementById('artWrapper')
      var imgData = event.target.attributes[1].value.split("-")
      var imgId = imgData[1]
      // changes style of modal so it can show individual enlarged photo
      modalImg.setAttribute('src', this.props.category[imgId].download_url)
      modal.style.display = 'block';
    }
  }

  parseTitle = titleData => {
    // string array
    let sArray = titleData.split("-");
    let sLength = sArray.length
    // last word of string isolated and .jpg removed
    let lastWord = sArray[sLength - 1].split(".jpg")[0]
    // string without the last word
    let partialString = sArray.slice(0, sLength - 1).join(" ")
    // combined strings
    let titleRaw = `${partialString} ${lastWord}`
    // capitalizes first letter of every word
    let title = titleRaw.toLowerCase().split(' ').map((s) => s.charAt(0).toUpperCase() + s.substring(1)).join(' ');

    return title
  }

  render() {

    const renderCategory = this.props.category.map((photo, index) => (
            <div className="artArchiveWrapper" key={index}>
              <button onClick={event => this.handleClick(event)}>
                <img id={index} value={`${this.props.type}-${index}`} src={photo.download_url} alt={photo.name} />
                <div className="middle">
                  <div className="text">
                    <span>{this.parseTitle(photo.name)}</span>
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
