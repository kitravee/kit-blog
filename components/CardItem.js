import { Card, Badge } from 'react-bootstrap';
import Link from 'next/link';
import { urlFor } from 'lib/api';

const CardItem = ({
  title,
  subtitle,
  tags,
  image,
  date,
  author,
  link,
  mode = 'normal',
}) => {
  return (
    <Card className={`fj-card ${mode}`}>
      <div className={`card-body-wrapper ${!image ? 'no-image' : ''}`}>
        <Card.Header className='d-flex flex-row'>
          <img
            src={author?.avatar || 'https://via.placeholder.com/150'}
            className='rounded-circle mr-3'
            height='50px'
            width='50px'
            alt='avatar'
          />
          {mode === 'placeholder' ? (
            <>
              <Card.Title className='font-weight-bold mb-1'>
                Placeholder Title
              </Card.Title>
              <Card.Text className='card-date'>Placeholder Date</Card.Text>
            </>
          ) : (
            <>
              <Card.Title className='font-weight-bold mb-1'>
                {author?.name}
              </Card.Title>
              <Card.Text className='card-date'>{date}</Card.Text>
            </>
          )}
        </Card.Header>

        <div className='view overlay'>
          {mode === 'placeholder' ? (
            <div className='image-placeholder' />
          ) : (
            image && (
              <Card.Img
                src={urlFor(image).height(300).crop('center').fit('clip').url()}
                alt='Card image cap'
              />
            )
          )}
        </div>

        <Card.Body>
          {mode === 'placeholder' ? (
            <>
              <Card.Title className='card-main-title'>
                Placeholder Title
              </Card.Title>
              <Card.Text>Placeholder Subtitle</Card.Text>
            </>
          ) : (
            <>
              <Card.Title className='card-main-title'>{title}</Card.Title>
              <Card.Text>{subtitle}</Card.Text>
            </>
          )}
        </Card.Body>

        {tags?.map((tag, idx) => (
          <Badge key={idx} variant='primary' className='mr-2'>
            {tag}
          </Badge>
        ))}
      </div>
      {link && (
        <Link {...link}>
          <a className='card-button'>Read More</a>
        </Link>
      )}
    </Card>
  );
};

export default CardItem;
