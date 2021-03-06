import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { WorkdetailsPostTemplate } from '../../templates/workdetails-post';

const WorkdetailsPostPreview = ({ entry }) => {
  const hashtags = entry.getIn(['data', 'hashtags']);
  const images = entry.getIn(['data', 'images']);
  const featuredimage = entry.getIn(['data', 'featuredimage']);
  const links = entry.getIn(['data', 'links']);
  const pdfs = entry.getIn(['data', 'pdfs']);

  console.log(images.toJS())

  // const imgObj = (i) => {
  //   const obj = {
  //     image: {
  //       childImageSharp: {
  //         fluid: {
  //           src: i.image,
  //         },
  //       },
  //     },
  //     imageTitle: i.imageTitle,
  //   };
  //   return obj;
  // };
  // const ftImgObj = {
  //   childImageSharp: {
  //     fluid: {
  //       src: featuredimage,
  //     },
  //   },
  // };

  // console.log(images.toJS().map((i) => imgObj(i)))

  return (
    <WorkdetailsPostTemplate
      title={entry.getIn(['data', 'title'])}
      subTitle={entry.getIn(['data', 'subTitle'])}
      description={entry.getIn(['data', 'description'])}
      layoutType={entry.getIn(['data', 'layoutType'])}
      hashtags={hashtags.toJS()}
      featuredimage={featuredimage}
      images={images && images.toJS()}
      links={links && links.toJS()}
      pdfs={pdfs && pdfs.toJS()}
    />
  );
};

WorkdetailsPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
};

export default WorkdetailsPostPreview;
