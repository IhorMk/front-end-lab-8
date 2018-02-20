const getFilteredArray = (arr, func2) => {
  let result = [];
  forEach(arr, el => {
      if (func2(el)) {
          result.push(el);
      }
  });
  return result;
}