const cypherPhrase = (obj, str) => {
  let arr = str.split("");
  return getTransformedArray(arr, func => obj[func] || func).join("");
}