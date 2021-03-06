const spawnCommand = require('spawn-command')

module.exports = killWin32

/**
 * Kills the new process and its sub processes forcibly.
 * @this ChildProcess
 * @returns {void}
 */
function killWin32() {
  spawnCommand('taskkill', ['/F', '/T', '/PID', this.pid])
}
