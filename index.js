#!/usr/bin/env node

const { renderLayer, structure, initStdIn, inputListener } = require('./src');

renderLayer(structure, Object.keys(structure)[0]);

initStdIn(inputListener);
