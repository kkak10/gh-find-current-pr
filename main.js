const core = require('@actions/core');
const { context } = require('@actions/github');

async function main() {
  const prNumber = context.payload.pull_request.number;

  console.log(prNumber);

  if (typeof prNumber !== 'number') {
    throw new Error("pull request number is not found.");
  }

  core.setOutput('pr', prNumber);
}

main().catch(err => core.setFailed(err.message));
