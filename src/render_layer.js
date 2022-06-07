const { clear, writeLine } = require('./utils');
const { getCurrentLayer } = require('./navigate');

const renderLayer = address => {
  clear();

  const currentLayer = getCurrentLayer();

  const key = address[address.length - 1];

  const keys = Object.keys(currentLayer);

  keys.forEach(currentKey => {
    let resultKey = currentKey;

    if (currentKey === key) {
      resultKey = `- ${currentKey}`;
    }

    writeLine(resultKey);
  });
};

module.exports = renderLayer;
