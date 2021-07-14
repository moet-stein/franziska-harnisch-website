import React from "react";
import PropTypes from "prop-types";
import { EventPageTemplate } from "../../templates/event-page";

const EventPagePreview = ({ entry, getAsset }) => {
  const entryBlurbs = entry.getIn(["data", "intro", "blurbs"]);
  const blurbs = entryBlurbs ? entryBlurbs.toJS() : [];

  return (
    <EventPageTemplate
      image={getAsset(entry.getIn(["data", "image"]))}
      title={entry.getIn(["data", "title"])}
      heading={entry.getIn(["data", "heading"])}
      description={entry.getIn(["data", "description"])}
      intro={{ blurbs }}
    />
  );
};

EventPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
};

export default EventPagePreview;
