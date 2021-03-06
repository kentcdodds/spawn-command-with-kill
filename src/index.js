const spawnCommand = require('spawn-command')

const kill = require(
  process.platform === 'win32' ? './kill-win32' : './kill-posix'
)

module.exports = spawnCommandWithKill

/**
 * Launches a new process with the given command.
 * This is almost same as `child_process.spawn`.
 *
 * This returns a `ChildProcess` instance.
 * `kill` method of the instance kills the new process and its sub processes.
 *
 * @param {string} command - The command to run.
 * @param {string[]} args - List of string arguments.
 * @param {object} options - Options.
 * @returns {ChildProcess} A ChildProcess instance of new process.
 * @private
 */
function spawnCommandWithKill(...args) {
  const child = spawnCommand(...args)
  child.kill = kill.bind(child)
  return child
}
