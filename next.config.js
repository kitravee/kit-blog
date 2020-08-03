module.exports = {
  env: {
    SANITY_DATASET_NAME: process.env.SANITY_DATASET_NAME,
    SANITY_PROJECT_ID: process.env.SANITY_PROJECT_ID,
  },
};

// const nextConfig = {
//   env: {
//     SANITY_DATASET_NAME: process.env.SANITY_DATASET_NAME,
//     SANITY_PROJECT_ID: process.env.SANITY_PROJECT_ID,
//   },
// };

// next.config.js
// const withPlugins = require('next-compose-plugins');
// const optimizedImages = require('next-optimized-images');

// module.exports = withPlugins([optimizedImages, nextConfig]);
