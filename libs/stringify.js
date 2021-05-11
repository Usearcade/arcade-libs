const beautify = require('json-beautify');

const stringify = thing => beautify(thing, null, 2, 50);

module.exports = stringify;
