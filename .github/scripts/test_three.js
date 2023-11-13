module.exports = async ({github, context, core}) => {
  core.setFailed("Set exit code");
  process.exit();
  console.log("test");
}
