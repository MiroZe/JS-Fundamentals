function loadingBar(number) {
  let uncompletedTask = (100 - number) / 10;
  let completedTask = number / 10;
  let uncompletedTaskSymbol = ".";
  let completedTaskSymbol = "%";
  if (number < 100) {
    console.log(
      `${number}% [${completedTaskSymbol.repeat(
        completedTask
      )}${uncompletedTaskSymbol.repeat(uncompletedTask)}]`
    );
    console.log("Still loading...");
  } else {
    console.log("100% Complete!");
    console.log(`[${completedTaskSymbol.repeat(
        completedTask
      )}]`);
  }
}
loadingBar(100);
