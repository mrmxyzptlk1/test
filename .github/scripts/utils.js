module.exports = async ({github, context, utils1, utils2}) => {
  console.log("inisde utils.js script:");
  console.log(utils1, utils2);
  
  const value1 = "test_value1"
  const value2 = "test_value2"
  return [value1, value2]
}
