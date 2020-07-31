import sanityClient from '@sanity/client';

const options = {
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET_NAME,
  //   token: 'sanity-auth-token', // or leave blank to be anonymous user
  useCdn: process.env.NODE_ENV === 'production', // `false` if you want to ensure fresh data
};

export default sanityClient(options);
