module.exports = async ({github, context, core, fetch}) => {
  const installationId = process.env.APPLICATION_INSTALLATION_ID;
  const permissions = process.env.PERMISSIONS;
  const repository_id = process.env.REPOSITORY_ID;
  const privateKey = process.env.APPLICATION_PRIVATE_KEY;
  const appId = process.env.APPLICATION_ID;

  permissions.trim();
  const perm_array = permissions.split(",");
  var perm_obj = {};
  for (var i = 0; i < perm_array.length; i++) {
    var split = perm_array[i].split(':');
    perm_obj[split[0].trim()] = split[1].trim();
  }

  const { Octokit } = require("@octokit/rest");
  const { createAppAuth } = require("@octokit/auth-app");
  const appOctokit = new Octokit({
    authStrategy: createAppAuth,
    auth: {
      appId: appId,
      privateKey: privateKey,
      installationId: installationId
    },
    request: { fetch }
  });
  const data = await appOctokit.auth({
    type: "installation",
    repositoryIds: [ repository_id ],
    permissions: perm_obj
  });
  console.log(data);

  console.log("Selected permissions: " + JSON.stringify(data.permissions));

  core.setOutput('token', data.token);
}
