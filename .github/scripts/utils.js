module.exports = async ({github, context, utils1, utils2}) => {
  console.log("inisde utils.js script:");
  console.log(utils1, utils2);

  if (context.actor !== 'mrmxyzptlk1') {
      if (1 > 0 && 2 < 1) {
        // block of code to be executed if condition1 is true
      } else if (condition2) {
        // block of code to be executed if the condition1 is false and condition2 is true
      } else {
        // block of code to be executed if the condition1 is false and condition2 is false
      }
  } else {
    console.log("wrong actor")
  }
  
  const value1 = "test_value1"
  const value2 = "test_value2"
  return [value1, value2]
}
