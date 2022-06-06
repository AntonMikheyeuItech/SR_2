const { clear, writeLine } = require('./utils');

const renderLayer = (obj, key) => {
  clear();

  const keys = Object.keys(obj);

  keys.forEach(currentKey => {
    let resultKey = currentKey;

    if (currentKey === key) {
      resultKey = `- ${currentKey}`;
    }

    writeLine(resultKey);
  });
};

module.exports = renderLayer;
