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

// offset = how many data you want to skip, limit = how many date you want to fetch

export async function getAllBlogs() {
  const results = await client.fetch(
    `*[_type == "blog"] | order(date desc) {${blogFields}}`,
  );
  return results;
}

export async function getPaginatedBlogs(
  { offset = 0, date = 'desc' } = { offset: 0, date: 'desc' },
) {
  const results = await client.fetch(
    `*[_type == "blog"] | order(date ${date}) {${blogFields}}[${offset}...${
      offset + 6
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
