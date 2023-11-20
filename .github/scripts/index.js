//const test = require('./.github/scripts/test.js');
//const test2 = require('./.github/scripts/test2.js');

module.exports = {
  test: __original_require__('./.github/scripts/test.js'),
  test2: __original_require__('./.github/scripts/test2.js')
}
