module.exports = async ({core, fetch}) => {
  const { Octokit } = require("@octokit/rest");
  const { createAppAuth } = require("@octokit/auth-app");
  const { request } = require("@octokit/request");
  
  const installationId = process.env.APPLICATION_INSTALLATION_ID;
  const permissions = process.env.PERMISSIONS;
  const privateKey = process.env.APPLICATION_PRIVATE_KEY;
  const appId = process.env.APPLICATION_ID;
  const repository_id = process.env.REPOSITORY_ID;
  const baseUrl = process.env.GITHUB_API_URL;

  const appOctokit = new Octokit({
    authStrategy: createAppAuth,
    auth: {
      appId: appId,
      privateKey: privateKey,
      installationId: installationId,
      request: request.defaults({
        baseUrl: baseUrl,
        fetch: fetch
      })
    },
    request: {
      fetch: fetch
    }
  });
  
  permissions.trim();
  const perm_array = permissions.split(",");
  var perm_obj = {};
  for (var i = 0; i < perm_array.length; i++) {
    var split = perm_array[i].split(':');
    perm_obj[split[0].trim()] = split[1].trim();
  }

  const data = await appOctokit.auth({
    type: "installation",
    repositoryIds: [ repository_id ],
    permissions: perm_obj
  });

  console.log("Requested token:");
  console.log(data);

  core.setOutput('token', data.token);
}
