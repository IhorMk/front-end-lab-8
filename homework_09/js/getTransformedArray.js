const getTransformedArray = (arr, func) => {
  let result = [];
  forEach(arr, el => result.push(func(el)));
  return result;
}