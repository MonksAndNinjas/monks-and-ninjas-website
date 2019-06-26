export const onClickAnimation = (value) => {
  var index = value[0];
  var removeProjectId = value[1];
  var enlargeProjectId = value[2];
  var removeSide = document.getElementById(removeProjectId);
  var enlargeSide = document.getElementById(enlargeProjectId);
  var enlargeButton = enlargeSide.getElementsByClassName('projectExpand')[0];
  var closeButton = enlargeSide.getElementsByClassName('projectClose')[0];
  var extraContent = enlargeSide.getElementsByClassName('projectContent')[0];

  removeSide.style.display = 'none';
  enlargeButton.style.display = 'none';
  closeButton.style.display = 'block';
  enlargeSide.style.width = '1000px';
  extraContent.style.display = 'block';
}

export const onCloseAnimation = (value) => {
  var index = value[0];
  var addProjectId = value[1];
  var reduceProjectId = value[2];
  var addSide = document.getElementById(addProjectId);
  var reduceSide = document.getElementById(reduceProjectId);
  var enlargeButton = reduceSide.getElementsByClassName('projectExpand')[0];
  var closeButton = reduceSide.getElementsByClassName('projectClose')[0];
  var extraContent = reduceSide.getElementsByClassName('projectContent')[0];

  reduceSide.style.width = '550px';
  extraContent.style.display = 'none';
  addSide.style.display = '';
  closeButton.style.display = 'none';
  enlargeButton.style.display = '';
}
