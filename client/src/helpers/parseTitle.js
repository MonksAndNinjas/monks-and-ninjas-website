export const parseTitle = dataString => {
  //console.log(dataString)
  // parse data
  let dataArray = dataString.split("-")
  let dataTitle = dataArray[0];
  let dataMedium = dataArray[2];
  let dataSize = dataArray[3];
  // define and collect formatted variables
  let title = dataTitle.split("_").join(" ").toLowerCase().split(' ').map((s) => s.charAt(0).toUpperCase() + s.substring(1)).join(' ');
  let category = dataArray[1].charAt(0).toUpperCase() + dataArray[1].slice(1);
  let medium =  dataMedium.split("+").map((m) => m.split("_").map((s) => s.charAt(0).toUpperCase() + s.substring(1)).join(" ")).join(", ");
  let size = `${dataSize.split(".")[0]}in`;

  return [title, category, medium, size]
}


/*
if (dataArray[3] !== 'sizein' && dataArray[2] !== 'Medium') {
    caption.innerHTML = `<p>Title: ${dataArray[0]}</p><p>Category: ${dataArray[1]}</p><p>Medium: ${dataArray[2]}</p><p>Dimensions: ${dataArray[3]}</p>`;
  } else if (dataArray[3] === 'sizein' && dataArray[2] !== 'Medium') {
    caption.innerHTML = `<p>Title: ${dataArray[0]}</p><p>Category: ${dataArray[1]}</p><p>Medium: ${dataArray[2]}</p>`;
  } else if (dataArray[3] !== 'sizein' && dataArray[2] === 'Medium') {
    caption.innerHTML = `<p>Title: ${dataArray[0]}</p><p>Category: ${dataArray[1]}</p><p>Dimensions: ${dataArray[3]}</p>`;
  } else if (dataArray[3] === 'sizein' && dataArray[2] === 'Medium') {
    caption.innerHTML = `<p>Title: ${dataArray[0]}</p><p>Category: ${dataArray[1]}</p>`;
}
*/
