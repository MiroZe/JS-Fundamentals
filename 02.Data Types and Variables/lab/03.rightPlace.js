function rightPlace(str1, char, str2) {
  let resultWord = str1.replace('_',char)
  
  let output = str2 === resultWord ? "Matched" : "Not Matched"
  console.log(output);
}
rightPlace("Str_ng", "i", "String");
