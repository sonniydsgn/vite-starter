module.exports = () => {
  return {
    plugins: [
      // postcss-import
      // postcss-preset-env
      // require('autoprefixer')(),
      require('postcss-sort-media-queries')({
        sort: 'dekstop-first', // default value
      }),
    ],
  };
};
