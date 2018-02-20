const decypherPhrase = (obj, str) => {
  let resObj = {};
  let prop;
  for (prop in obj) {
      resObj[obj[prop]] = prop;
  }
  return cypherPhrase(resObj, str);
}