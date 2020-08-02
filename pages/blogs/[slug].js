import PageLayout from 'components/PageLayout';
import BlogHeader from 'components/BlogHeader';
import BlogContent from 'components/BlogContent';

import { useRouter } from 'next/router';
import { getBlogBySlug, getAllBlogs } from 'lib/api';
import { Row, Col } from 'react-bootstrap';

const BlogDetail = ({ blog }) => {
  //   const { query } = useRouter();
  return (
    <PageLayout className='blog-detail-page'>
      <Row>
        <Col md={{ span: 10, offset: 1 }}>
          <BlogHeader blog={blog} />
          <hr />
          <BlogContent content={blog.content} />
        </Col>
      </Row>
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
  const blogs = await getAllBlogs();

  return {
    paths: blogs?.map((blog) => ({
      params: { slug: blog.slug },
    })),
    fallback: false,
  };
}

export default BlogDetail;
