export const onClickAnimation = () => {// (index, selectedImg)
  // pass in value to say it was the one selected
  var removeImg1 = document.getElementById('highlight-art-1');
  var removeImg2 = document.getElementById('highlight-art-2');
  var removeImg3 = document.getElementById('highlight-art-3');
  var artContent = document.getElementById('viewArtWrapper')

  //var array = [removeImg1, removeImg2, removeImg3];

  //array[index] = selectedImg

  var positionData1 = removeImg1.getBoundingClientRect(); // reference point meeting
  var positionData2 = removeImg2.getBoundingClientRect();
  var positionData3 = removeImg3.getBoundingClientRect();

  var positionX1 = positionData1.x
  var positionY1 = positionData1.y

  var positionX2 = positionData2.x
  var positionY2 = positionData2.y

  var positionX3 = positionData3.x
  var positionY3 = positionData3.y

  var dist1X2 = positionX1 - positionX2;
  var dist1X3 = positionX1 - positionX3;

  var dist1Y2 = positionY1 - positionY2;
  var dist1Y3 = positionY1 - positionY3;

  console.log(dist1X2, dist1X3, dist1Y2, dist1Y3)

  removeImg1.style.display = 'none';
  removeImg2.style.display = 'none';
  removeImg3.style.display = 'none';
  artContent.style.display = 'inline-flex';
}

export const onCloseAnimation = () => {
  var removeImg1 = document.getElementById('highlight-art-1');
  var removeImg2 = document.getElementById('highlight-art-2');
  var removeImg3 = document.getElementById('highlight-art-3');
  var artContent = document.getElementById('viewArtWrapper')

  removeImg1.style.display = 'inline-table';
  removeImg2.style.display = 'inline-table';
  removeImg3.style.display = 'inline-table';
  artContent.style.display = 'none';
}

// #highlight1, #highlight2, #highlight3 => { position: relative; z-indez: (3, 2, 1); transform: translate(what is the value to move) }


// first I need to pick point for them to meet - use highlight1 as reference
// second get the 3 div positions and width
// third create forumla to make the left  side edge touch for each div
// fourth after meeting edges rotate the unselected divs
// then able to reverse

// increases height for selected and adjusts height for unselected, making them the same width and height
