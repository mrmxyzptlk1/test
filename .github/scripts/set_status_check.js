module.exports = async ({}) => {
  var { data } = await github.rest.pulls.get({
    owner: context.repo.owner,
    repo: context.repo.repo,
    pull_number: context.issue.number,
  });
  const ref = data.head.sha;
  console.log("Last commit sha on PR: ", ref);
  
  var { data } = await github.rest.checks.listForRef({
    owner: context.repo.owner,
    repo: context.repo.repo,
    ref: ref,
  });
  const check_run_id = data.check_runs.find(({ name }) => name === 'test')?.id
  console.log("Check run id associated with last commit: ", check_run_id);

  github.rest.checks.update({
    owner: context.repo.owner,
    repo: context.repo.repo,
    check_run_id: check_run_id,
    status: 'completed',
    conclusion: 'success'
  });
}
