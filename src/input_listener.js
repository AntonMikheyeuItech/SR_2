const { execSync } = require("child_process");
const { structure, clear } = require('./utils');
const renderLayer = require('./render_layer');

const { exit, env: { PWD: cwd } } = process;

const exec = command => execSync(command, {
  cwd,
  stdio: 'inherit',
});

let prevKey = Object.keys(structure)[0];

const inputListener = key => {
  const char = key && key.toString();
  const code = char && char.charCodeAt();

  if (code === 3) {
    exit(0);
  }

  if (code === 13) {
    clear();
    const runCommand = structure[prevKey];

    if (typeof runCommand === 'string') {
      exec(runCommand);
    }

    if (Array.isArray(runCommand)) {
      exec(runCommand.join(' && '));
    }

    return;
  }

  switch (char) {
      case 's':
        prevKey = Object.keys(structure)[Object.keys(structure).indexOf(prevKey) + 1];
        break;
      case 'w':
        prevKey = Object.keys(structure)[Object.keys(structure).indexOf(prevKey) - 1];
        break;
  };

  renderLayer(structure, prevKey);
}

module.exports = inputListener;
