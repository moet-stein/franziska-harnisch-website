import React from 'react';
import PropTypes from 'prop-types';
import { TestMoePageTemplate } from '../../templates/testMoe-page';

const TestMoePagePreview = ({ entry, widgetFor }) => (
  <TestMoePageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
);

TestMoePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default TestMoePagePreview;
