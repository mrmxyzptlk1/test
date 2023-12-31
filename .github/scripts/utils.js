module.exports = async ({github, context, utils1, utils2}) => {
  console.log("inisde utils.js script:");
  console.log(utils1, utils2);

  console.log(context.eventName);
  if (context.eventName === 'pull_request') {
    var action = "create";
    if (context.actor !== 'mrmxyzptlk1') {
        if (utils1 === '[]' || (utils1 !== '[]' && utils2 === '0')) {
          console.log("Utils: Skip");
          var status = "skip";
        } else if (utils1 !== '[]' && utils2 !== '0') {
          console.log("Utils: Fail");
          var status = "fail";
        }
    } else if (context.actor === 'mrmxyzptlk1') {
      console.log("Utils: Success");
      var status = "success";
    }
  } else if (context.eventName === 'issue_comment') {
    console.log("Utils, issue_comment: Update success");
    var action = "update";
    var status = "success";
  }

  return [action, status]
}
