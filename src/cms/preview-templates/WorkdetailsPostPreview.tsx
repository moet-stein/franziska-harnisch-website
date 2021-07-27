import React from 'react';
import PropTypes from 'prop-types';
import { WorkdetailsPostTemplate } from '../../templates/workdetails-post';

const WorkdetailsPostPreview = ({ entry, widgetFor }) => {
  return (
    <WorkdetailsPostTemplate
      title={entry.getIn(['data', 'title'])}
      description={entry.getIn(['data', 'description'])}
    />
  );
};

WorkdetailsPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default WorkdetailsPostPreview;
