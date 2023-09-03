module.exports = () => {
  return {
    plugins: [
      require('autoprefixer')(),
      require('postcss-sort-media-queries')({
        sort: 'dekstop-first', // default value
      }),
    ],
  };
};
