function fancyBarcodes (input) {

    let pattern = /@#+(?<product>[A-Z][A-Za-z0-9]{4,}[A-Z])@#+/g
let numberOfBarcodes = Number(input.shift());
 for ( let i = 0; i < numberOfBarcodes; i++) {
let currentBarcode = input[i];
     let matches = currentBarcode.match(pattern);

     let digitMatches = currentBarcode.match(/\d/g);
     let group = '00'

     if(matches !== null) {
         if(digitMatches) {
            group = digitMatches.join('');
         }
         console.log(`Product group: ${group}`)
     } else {
         console.log('Invalid barcode')
     }


 }

}
fancyBarcodes(["6",
"@###Val1d1teM@###",
"@#ValidIteM@#",
"##InvaliDiteM##",
"@InvalidIteM@",
"@#Invalid_IteM@#",
"@#ValiditeM@#"])