module.exports = ({github, context, core}) => {
  const appId = process.env.APPLICATION_ID;
  const privateKey = process.env.APPLICATION_PRIVATE_KEY;
  const installationId = process.env.APPLICATION_INSTALLATION_ID;
  
  const jsonwebtoken = require('jsonwebtoken')
  const now = Math.floor(Date.now() / 1000)
  const payload = {
    iat: now, // Issued at time
    exp: now + 60, // JWT expiration time
    iss: appId
  }
  const bearer = jsonwebtoken.sign(payload, privateKey, {algorithm: 'RS256'})

  console.log(bearer);
  
  core.setOutput('result', bearer);
}
