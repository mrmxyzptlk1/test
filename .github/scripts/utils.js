module.exports = async ({github, context, utils1, utils2}) => {
  console.log("inisde utils.js script:");
  console.log(utils1, utils2);

  const action = "create"
  if (context.actor === 'mrmxyzptlk1') {
      if (utils1 === '[]' || (utils1 !== '[]' && utils2 === '0')) {
        console.log("Utils: Skip");
        const status = "skip";
        console.log(status);
      } else if (utils1 !== '[]' && utils2 === '0') {
        console.log("Utils: Fail");
        const status = "fail";
      } else {
        console.log("else");
      }
  } else if (context.actor !== 'mrmxyzptlk1') {
    console.log("Utils: Success");
    const status = "success";
  }

  return [action, status]
}
