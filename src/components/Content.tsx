import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

export const HTMLContent = ({ content, className }) => (
  <Box ml={3} mr={3}>
    <Typography
      className={className}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  </Box>
);

const Content = ({ content, className }) => (
  <Box ml={3} mr={3}>
    <Typography className={className}>{content}</Typography>
  </Box>
);

Content.propTypes = {
  content: PropTypes.node,
  className: PropTypes.string,
};

HTMLContent.propTypes = Content.propTypes;

export default Content;
