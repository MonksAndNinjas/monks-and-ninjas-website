import React from 'react';
// imports functions to apply masonry layout
import { resizeAllGridItems } from '../../helpers/masonryLayout.js';
import { resizeInstance } from '../../helpers/masonryLayout.js';
// allows use of imagesLoaded
var imagesLoaded = require('imagesloaded');

class ArtCategory extends React.Component {
  // when photo is clicked a window pops up to display enlarged photo
  handleClick = event => {
    event.preventDefault();
    event.persist();
    // if clicked on the correct portion of theimage
    if (event.target.attributes[1]) {
      var modalImg = document.getElementsByClassName('modal-content')[0]
      var modal = document.getElementById('myModal')
      var imgData = event.target.attributes[1].value.split("-")
      var imgId = imgData[1]
      // changes style of modal so it can show individual enlarged photo
      modalImg.setAttribute('src', this.props.category[imgId].download_url)
      modal.style.display = 'block';
    }
  }

  render() {

    const renderCategory = this.props.category.map((photo, index) => (
            <div className="item" key={index}>
              <button className="art" onClick={event => this.handleClick(event)}>
                <img id={index} value={`${this.props.type}-${index}`} src={photo.download_url} alt={photo.name} />
                <div className="middle">
                  <div className="text">
                    <span>{photo.name}</span>

                    <br/><br/>

                    <span>View</span>
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
    var allArt = document.getElementsByClassName("item")
    // makes sure all images have loaded before applying styles and retrieving information
    for(var x = 0; x < allArt.length; x++){
      imagesLoaded(allArt[x], resizeInstance);
    }

    window.onload = resizeAllGridItems()
    window.addEventListener("resize", resizeAllGridItems)
  }

}

export default ArtCategory;
