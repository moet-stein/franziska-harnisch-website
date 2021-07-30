import React from 'react';
import PropTypes from 'prop-types';
import { ExhibitionsPageTemplate } from '../../templates/exhibitions-page';

const ExhibitionsPagePreview = ({ entry, getAsset }) => {
  const entryBlurbs = entry.getIn(['data', 'intro', 'blurbs']);

  return <ExhibitionsPageTemplate title={entry.getIn(['data', 'title'])} />;
};

ExhibitionsPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
};

export default ExhibitionsPagePreview;
