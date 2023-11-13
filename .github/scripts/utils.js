module.exports = async ({github, context, param1, param2}) => {
  console.log("inisde utils.js script:");
  console.log(param3, param4);
  
  const value1 = "test_value1"
  const value2 = "test_value2"
  return { value1, value2 }
}
