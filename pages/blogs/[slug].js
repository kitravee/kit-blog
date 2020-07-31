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

export async function getServerSideProps({ params }) {
  const blog = await getBlogBySlug(params.slug);
  return {
    props: { blog }, // will be passed to the page component as props
  };
}

export default BlogDetail;
