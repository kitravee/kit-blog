import BlockContent from '@sanity/block-content-to-react';
import HighlightCode from 'components/HighlightCode';

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
      <BlockContent
        imageOptions={{ w: 320, h: 240, fit: 'max' }}
        serializers={serializers}
        blocks={content}
      />
    </div>
  );
};

export default BlogContent;
