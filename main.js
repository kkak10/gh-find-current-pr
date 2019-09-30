const core = require('@actions/core');
const { context } = require('@actions/github');

async function main() {
  const prNumber = context.payload.pull_request.number;

  throw new Error("pull request number is not found.");
}

main().catch(err => core.setFailed(err.message));
