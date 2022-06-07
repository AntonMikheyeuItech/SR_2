const { getCharCode } = require('./utils');
const { getNextPrevByLayer } = require('./navigate');

const inputListener = key => {
  const { char } = getCharCode(key);

  const { next, prev } = getNextPrevByLayer();

  switch (char) {
      case 's':
        next();
        break;
      case 'w':
        prev();
        break;
  };
}

module.exports = inputListener;
