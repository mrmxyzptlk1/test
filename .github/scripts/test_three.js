module.exports = async ({github, context, core}) => {
  console.log("before setFailed");
  core.setFailed("Set exit code");
  process.exit();
  console.log("test");
}
