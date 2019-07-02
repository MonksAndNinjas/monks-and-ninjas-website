// call backs for toggling display
// array = [0: firstSide, 1: secondSide, 2: extraContent, 3: enlargeButton, 4: closeButton];
// call back function 1 from onClickAnimation
function cb (array) {
  // display content within selected project
  array[3].style.display = 'none';

  setTimeout(function() {
    array[0].style.width = '1000px';
    array[1].style.display = 'none';
    array[2].style.display = 'block';
    array[4].style.display = 'block';
  }, 1000)
}
// call back function 2 from onCloseAnimation
function cb2 (array) {
  // add content back into project that will be added
  array[4].style.display = 'none';

  setTimeout(function() {
    array[0].style.width = '550px';
    array[1].style.display = '';
    array[1].setAttribute("style", "animation-direction: reverse")
    array[1].classList.add("move-left-animation");
    array[2].style.display = 'none';
  }, 1000)

  setTimeout(function() {
    array[3].style.display = '';
  }, 2000)
}
// maybe put removeClass into own export function and use for every animation
// remove animation class
function removeClass (array, class1, class2) {
  // remove animation class
  array[0].classList.remove(class1);
  array[1].classList.remove(class1)
  array[0].classList.remove(class2);
  array[1].classList.remove(class2)
  // triggering reflow so animation can start again
  void array[0].offsetWidth;
  void array[1].offsetWidth;
}
// animation functions
// displays single project and removes the other
export const onClickAnimation = (array) => {
  // remove listeners
  array[0].removeEventListener("animationstart", cb2);

  removeClass(array, "fadeOutIn", "move-left-animation");
  // add listener
  array[1].setAttribute("style", "animation-direction: normal")
  array[0].addEventListener("animationstart", cb(array));
  // add animation
  array[0].classList.add("fadeOutIn");
  array[1].classList.add("move-left-animation");
}
// displays highlight projects and shrinks single post
export const onCloseAnimation = (array) => {
  // remove listeners
  array[0].removeEventListener("animationstart", cb)

  removeClass(array, "fadeOutIn", "move-left-animation");
  // add listener
  array[0].addEventListener("animationstart", cb2(array))
  // add animation
  array[0].classList.add("fadeOutIn");
}
