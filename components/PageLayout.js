import { Container } from 'react-bootstrap';
import Head from 'next/head';
import Navbar from 'components/Navbar';

const PageLayout = ({ children, className }) => {
  return (
    <>
      <Head>
        <link
          href='https://fonts.googleapis.com/css2?family=Nunito:wght@400;700;900&display=swap'
          rel='stylesheet'
        />
      </Head>
      <Container>
        <Navbar />
        <div>{children}</div>
        <footer className={`page-footer ${className}`}>
          <div>
            <a href='#'>courses</a>
            {' | '}
            <a href='#'>github</a>
            {' | '}
            <a href='#'>facebook</a>
          </div>
        </footer>
      </Container>
    </>
  );
};

export default PageLayout;
