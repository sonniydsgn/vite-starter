module.exports = () => {
  return {
    plugins: [
      require('postcss-nested'),
      require('postcss-preset-env')({
        features: {
          'nesting-rules': false
        }
      })
    ],
  };
};
