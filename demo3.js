function createError() {
  throw new Error("Inner Error");
}

function callErrorFunction() {
  try {
    createError();
  }
  catch(innerError) {
    var stringWithStack = '\n--THIS WILL NOT REPEAT--\n' + innerError.stack + '\n--THIS WILL REPEAT--\n';
    throw new Error(stringWithStack);
  }
}

callErrorFunction();

