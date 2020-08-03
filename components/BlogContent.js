import BlockContent from '@sanity/block-content-to-react';
import HighlightCode from 'components/HighlightCode';
import { urlFor } from 'lib/api';

const serializers = {
  types: {
    code: ({ node: { language, code, filename } }) => {
      return (
        <HighlightCode language={language}>
          {code}
          <div className='code-filename'>{filename}</div>
        </HighlightCode>
      );
    },
    image: ({ node: { asset, alt, position = 'center' } }) => {
      return (
        <div className={`blog-image blog-image-${position}`}>
          <img src={urlFor(asset).height(300).fit('max').url()} />
          <div className='image-alt'>{alt}</div>
        </div>
      );
    },
  },
};

// const serializers = {
//   types: {
//     code: (props) => (
//       <pre data-language={props.node.language}>
//         <code>{props.node.code}</code>
//       </pre>
//     ),
//   },
// };

const BlogContent = ({ content }) => {
  return (
    <div>
      <BlockContent serializers={serializers} blocks={content} />
    </div>
  );
};

export default BlogContent;
