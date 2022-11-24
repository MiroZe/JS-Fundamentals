function fancyBarcode(input) {
  let pattern = /@#+[A-Z][a-zA-Z0-9]{4,}[A-Z]@#+/g;
  let numberOfBarcodes = Number(input.shift());

  for (let i = 0; i < numberOfBarcodes; i++) {
    let currentBarcode = input[i];
    let validBarcode = currentBarcode.match(pattern);
    
    if (validBarcode === null) {
      console.log("Invalid barcode");
    } else {
      let currentGroup = "";
      for (let char of currentBarcode) {
        if (char.charCodeAt() >= 48 && char.charCodeAt() <= 57) {
          currentGroup += char.toString();
        }
      }

      if (currentGroup.length === 0) {
        currentGroup = "00";
      }
      console.log(`Product group: ${currentGroup}`);
    }
  }
}

fancyBarcode(["6",
"@###Val1d1teM@###",
"@#ValidIteM@#",
"##InvaliDiteM##",
"@InvalidIteM@",
"@#Invalid_IteM@#",
"@#ValiditeM@#"])

