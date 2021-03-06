const config = {
  extends: ['pretty-standard'],
  plugins: ['mocha'],
  rules: {
    'mocha/no-exclusive-tests': 'error',
    'mocha/no-nested-tests': 'error',
    'mocha/no-identical-title': 'error'
  }
};

if (process.stdin.isTTY) {
  // Enable plugin-prettier when running in a terminal. Allows us to have
  // eslint verify prettier formatting, while not being bothered by it in our
  // editors.
  config.extends.push('prettier');
  config.plugins.push('prettier');
  config.rules['prettier/prettier'] = ["error", { "singleQuote": true }];
}

module.exports = config;
