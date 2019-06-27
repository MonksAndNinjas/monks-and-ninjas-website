export const onClickAnimation = () => {
  var removeImg1 = document.getElementById('highlight-art-1');
  var removeImg2 = document.getElementById('highlight-art-2');
  var removeImg3 = document.getElementById('highlight-art-3');
  var artContent = document.getElementById('viewArtWrapper')

  console.log(removeImg1.getBoundingClientRect())
  console.log(removeImg2.getBoundingClientRect())
  console.log(removeImg3.getBoundingClientRect())

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
// third create forumla to make the left side edge touch for each div
// fourth after meeting edges rotate the unselected divs
// then able to reverse

// increases height for selected and adjusts height for unselected, making them the same width and height
