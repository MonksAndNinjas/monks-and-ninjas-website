function resizeGridItem(art) {
  var grid = document.getElementsByClassName('artsWrapper')[0]
  var rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
  var rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'));
  var rowSpan = Math.ceil((art.getElementsByTagName('img')[0].getBoundingClientRect().height+rowGap)/(rowHeight+rowGap));

  art.style.gridRowEnd ="span "+rowSpan;
}

export const resizeInstance = (instance) => {
  var art = instance.elements[0];

  resizeGridItem(art);
}

export const resizeAllGridItems = () =>  {
  var allArt = document.getElementsByClassName("item")

  for(var x = 0; x < allArt.length; x++){
    resizeGridItem(allArt[x]);
  }
}
