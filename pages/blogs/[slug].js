import PageLayout from 'components/PageLayout';
import { useRouter } from 'next/router';
import { getBlogBySlug } from 'lib/api';

const BlogDetail = ({ blog }) => {
  //   const { query } = useRouter();
  debugger;
  return (
    <PageLayout>
      <h1>h1 {blog?.slug}</h1>
    </PageLayout>
  );
};

// export async function getServerSideProps({ params }) {
//   const blog = await getBlogBySlug(params.slug);
//   return {
//     props: { blog }, // will be passed to the page component as props
//   };
// }

export async function getStaticProps({ params }) {
  const blog = await getBlogBySlug(params.slug);
  return {
    props: { blog }, // will be passed to the page component as props
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: 'my-first-blog' } },
      { params: { slug: 'my-second-blog' } },
      { params: { slug: 'ggg' } }, // See the "paths" section below
    ],
    fallback: false,
    //   fallback: true or false // See the "fallback" section below
  };
}

export default BlogDetail;
