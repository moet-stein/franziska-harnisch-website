import React from 'react';
import PropTypes from 'prop-types';
import { WorksPageTemplate } from '../../templates/works-page';

const WorksPagePreview = ({ entry }) => {
//   const entryBlurbs = entry.getIn(['data', 'intro', 'blurbs']);
//   const blurbs = entryBlurbs ? entryBlurbs.toJS() : [];

  return (
    <WorksPageTemplate
      title={entry.getIn(['title'])}
    />
  );
};

WorksPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
};

export default WorksPagePreview;
