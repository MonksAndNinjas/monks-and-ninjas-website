export const parseTitle = dataString => {
  console.log(dataString)
  // parse data
  let dataArray = dataString.split("-")
  let dataTitle = dataArray[0];
  let dataMedium = dataArray[2];
  let dataSize = dataArray[3];
  // define and collect formatted variables
  let title = dataTitle.split("_").join(" ").toLowerCase().split(' ').map((s) => s.charAt(0).toUpperCase() + s.substring(1)).join(' ');
  let category = dataArray[1];
  let medium =  dataMedium.split("+").map((m) => m.split("_").map((s) => s.charAt(0).toUpperCase() + s.substring(1)).join(" ")).join(", ");
  let size = `${dataSize.split(".")[0]}in`;

  return [title, category, medium, size]
}
