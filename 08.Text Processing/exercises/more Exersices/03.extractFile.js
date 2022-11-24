function extractFile(path) {
  let separatedPath = path.split("\\");
  let wholeFile = separatedPath.pop();
  let extensionIndex = wholeFile.lastIndexOf(".");
  const fileName = wholeFile.substring(0, extensionIndex);
  const extensionName = wholeFile.substring(extensionIndex + 1);

  console.log(`File name: ${fileName}`);
  console.log(`File extension: ${extensionName}`);
}
extractFile("C:\\Projects\\Data-Structures\\LinkedList.cs");
