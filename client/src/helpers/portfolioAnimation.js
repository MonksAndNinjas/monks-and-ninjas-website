// call backs for toggling display
// call back function 1 from onClickAnimation
// array = [0: removeSide, 1: enlargeSide, 2: extraContent, 3: title, 4: enlargeButton, 5: closeButton, 6: image, 7: desc];
function cb (array) {
  array[4].style.display = 'none';

  setTimeout(function() {
    array[2].style.display = 'block';
    array[5].style.display = 'block';
  }, 2000)
}
// call back function 2 from onClickAnimation
function cb2 (array) {
  // remove content from inside shrinking div
  array[6].style.display = 'none';
  array[7].style.display = 'none';

  setTimeout(function() {
    // remove remaining content and enlarge clicked on project
    array[0].style.display = 'none';
    array[3].style.display = 'none';
    array[1].classList.add("enlarge-portfolio-animation");
  }, 500)
}
// call back function 3 from onCloseAnimation
//array = [0: addSide, 1: reduceSide, 2: extraContent, 3: title, 4: enlargeButton, 5: closeButton, 6: image, 7: desc]
function c3 (array) {
  // add content back into project that will be added
  array[2].style.display = 'none';

  setTimeout(function() {
    // shrink enlarged project and reset enlarge button
    array[0].style.display = 'inline-table'
    array[0].setAttribute("style", "animation-direction: reverse;");
    array[0].classList.add("shrink-portfolio-animation");
    array[3].style.display = 'block';
    array[4].style.display = 'inline-block';
  }, 2000);

  setTimeout(function() {
    // add remaining content to project that will be added
    array[5].style.display = 'none';
    array[6].style.display = 'block';
    array[7].style.display = 'block';
  }, 2000)
}
// remove animation class
function removeClass (array, class1, class2) {
  // remove animation class
  array[0].classList.remove(class1);
  array[1].classList.remove(class2);
  // triggering reflow so animation can start again
  void array[0].offsetWidth;
  void array[1].offsetWidth;
}
// animation functions
// displays single project and removes the other
export const onClickAnimation = (array) => {
  // remove listener
  array[0].removeEventListener("animationstart", c3)
  // reset animation direction
  array[0].setAttribute("style", "animation-direction: normal;")
  array[1].setAttribute("style", "animation-direction: normal;")

  removeClass(array, "enlarge-portfolio-animation", "shrink-portfolio-animation");
  // add listeners
  array[0].addEventListener("animationstart", cb2(array));
  array[1].addEventListener("animationstart", cb(array));
  // add animation
  array[0].classList.add("shrink-portfolio-animation")
}
// displays highlight projects and shrinks single post
export const onCloseAnimation = (array) => {
  // remove listeners
  array[0].removeEventListener("animationstart", cb2)
  array[1].removeEventListener("animationstart", cb)

  removeClass(array, "shrink-portfolio-animation", "enlarge-portfolio-animation");
  // add listener
  array[1].addEventListener("animationstart", c3(array))
  // add animation
  array[1].setAttribute("style", "animation-direction: reverse;");
  array[1].classList.add("enlarge-portfolio-animation");
}
