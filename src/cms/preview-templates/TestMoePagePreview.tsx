import React from 'react';
import PropTypes from 'prop-types';
import { TestMoePageTemplate } from '../../templates/testMoe-page';

const TestMoePagePreview = ({ entry, getAsset }) => {
  const entryBlurbs = entry.getIn(['data', 'intro', 'blurbs']);
  const blurbs = entryBlurbs ? entryBlurbs.toJS() : [];

  return (
    <TestMoePageTemplate
      image={getAsset(entry.getIn(['data', 'image']))}
      title={entry.getIn(['data', 'title'])}
      description={entry.getIn(['data', 'description'])}
      intro={{ blurbs }}
    />
  );
};

TestMoePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
};

export default TestMoePagePreview;
