var stringWithStack = '\n--THIS WILL NOT REPEAT--\n' + new Error().stack + '\n--THIS WILL REPEAT--\n';
console.log(stringWithStack);
throw new Error(stringWithStack);
