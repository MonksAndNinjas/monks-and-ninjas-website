export const onClickAnimation = () => {
  var removeImg1 = document.getElementById('highlight-art-1');
  var removeImg2 = document.getElementById('highlight-art-2');
  var removeImg3 = document.getElementById('highlight-art-3');
  var artContent = document.getElementById('viewArtWrapper')

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
