const { structure } = require('./utils');

const address = [Object.keys(structure)[0]];

const subscrubers = [];

const callAllSubscrubers = () => subscrubers.forEach(subscruber => subscruber(address));

const getCurrentLayer = () => address.reduce((acc, key, index, { length }) => {
  if (index === length - 1) return acc;

  return structure[key];
}, structure);

const addKey = key => {
  address.push(key);
  callAllSubscrubers();
};

const removeLastKey = () => {
  address.pop();
  callAllSubscrubers();
};

const updateCurrentKey = key => {
  address[address.length - 1] = key;
  callAllSubscrubers();
};

const getNextPrevByLayer = () => {
  const currentKey = address[address.length - 1];

  const keys = Object.keys(getCurrentLayer());

  const currentIndex = keys.indexOf(currentKey);

  return {
    next: () => updateCurrentKey(keys[currentIndex + 1]),
    prev: () => updateCurrentKey(keys[currentIndex - 1]),
  }
};

const addSubscrubers = (...args) => args.forEach(subscruber => subscrubers.push(subscruber));

module.exports = {
  address,
  addKey,
  removeLastKey,
  addSubscrubers,
  updateCurrentKey,
  getCurrentLayer,
  getNextPrevByLayer,
};
