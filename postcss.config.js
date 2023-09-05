module.exports = () => {
  return {
    plugins: [
      require('postcss-preset-env')(),
      require('postcss-sort-media-queries')({
        sort: 'dekstop-first', // default value
      })
    ],
  };
};
