export const parseTitle = titleData => {
  // string array
  let sArray = titleData.split("-");
  let sLength = sArray.length
  // last word of string isolated and .jpg removed
  let lastWord = sArray[sLength - 1].split(".jpg")[0]
  // string without the last word
  let partialString = sArray.slice(0, sLength - 1).join(" ")
  // combined strings
  let titleRaw = `${partialString} ${lastWord}`
  // capitalizes first letter of every word
  let title = titleRaw.toLowerCase().split(' ').map((s) => s.charAt(0).toUpperCase() + s.substring(1)).join(' ');

  return title
}
