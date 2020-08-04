import client from './sanity';
import imageUrlBuilder from '@sanity/image-url';

const blogFields = `
    title, 
    subtitle, 
    'slug': slug.current, 
    tags, 
    date, 
    'author': author->{name, 'avatar':avatar.asset->url},
    coverImage,
    "coverPhoto": coverImage.asset->{
      url,
      metadata {
        location,
        palette,
        lqip
      }
    }
`;
// 'author': author->{name, 'avatar':avatar.asset->url},
//    'coverImage': coverImage.asset->url
export function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}

// const blogFields = `
//     title, subtitle, 'ASWEWANT': slug.current
// `;

export async function getAllBlogs({ offset } = { offset: 0 }) {
  const results = await client.fetch(
    `*[_type == "blog"] | order(date desc) {${blogFields}}[${offset}...${
      offset + 3
    }]`,
  );
  return results;
}

export async function getBlogBySlug(slug) {
  const result = await client
    .fetch(
      `*[_type == "blog" && slug.current == $slug] {
      ${blogFields}, content[]{...,'asset':asset->}
    }`,
      { slug },
    )
    .then((res) => res?.[0]);

  return result;
}
