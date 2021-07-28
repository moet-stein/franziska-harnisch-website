import React from 'react';
import PropTypes from 'prop-types';
import { WorkdetailsPostTemplate } from '../../templates/workdetails-post';

const WorkdetailsPostPreview = ({ entry, widgetFor }) => {
  console.log(entry);
  return (
    // <WorkdetailsPostTemplate
    //   title={entry.getIn(['data', 'title'])}
    //   description={entry.getIn(['data', 'description'])}
    // />
    <div>Hello</div>
  );
};

WorkdetailsPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default WorkdetailsPostPreview;
