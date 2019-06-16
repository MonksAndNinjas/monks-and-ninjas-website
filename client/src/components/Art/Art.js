import React from 'react';
// imports component to display categories
class Art extends React.Component {

  handleClick = event => {
    event.preventDefault();

    var modal = document.getElementById("artWrapper");

    modal.style.display = "none";
  }

  render() {
    return (
      <div id="artWrapper" className="modal">
        <span onClick={event => this.handleClick(event)} className="close">&times;</span>
        <img className="modal-content" id="modal-img"/>
        <div id="caption"></div>
      </div>
    )
  }
}

export default Art;
