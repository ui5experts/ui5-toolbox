module.exports = {
  extends: 'airbnb-base/legacy',
  globals: {
    sap: true,
    jQuery: true
  },
  rules: {
    // allow anonymous functions
    'func-names': 'off',
    //'no-param-reassign': 'off',
    // allow a max of 3 instead of 2
    'no-multiple-empty-lines': ['error', { max: 3, maxEOF: 1 }],
    'padded-blocks': ['warn', 'never'],
    // allow unused function arguments for documentary purposes
    'no-unused-vars': ['error', { 'vars': 'all', 'args': 'none' }]
  }
};
