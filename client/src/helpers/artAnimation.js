// array = [0: highlightImg1, 1: highlightImg2, 2:  highlightImg3, 3: artContent]
// call backs for toggling display
// call back function 1 from onClickAnimation
function cb (el) {
  setTimeout(function() {
    el.style.display = 'none'
  }, 1000);
}
// call back function 2 from onCloseAnimation
function cb2 (array) {
  setTimeout(function() {
    array[3].style.display = 'none';

    for (let i = 0; i < (array.length - 1); i++) {
      array[i].removeEventListener("animationend", cb);
      removeClass(array[i], "fadeout", "fadein");
      array[i].style.display = '';
    }
  }, 1000)
}
// reset animation
function removeClass(el, class1, class2) {
  el.classList.remove(class1);
  void el.offsetWidth;                        // triggering reflow so animation can start again
  el.classList.add(class2);
}
// animation functions
// displays single art image and removes highlight art images
export const onClickAnimation = (array) => {
  for (let i = 0; i < (array.length - 1); i++) {
    removeClass(array[i], "fadein", "fadeout");
    array[i].addEventListener("animationend", cb(array[i]));
  }

  setTimeout(function() {
    removeClass(array[3], "fadeout", "fadein");
    array[3].style.display = 'inline-flex';
  }, 1000)
}
// displays highlight art images and removes single art image
export const onCloseAnimation = (array) => {
  array[3].addEventListener("animationend", cb2(array))
  removeClass(array[3], "fadein", "fadeout")
}
