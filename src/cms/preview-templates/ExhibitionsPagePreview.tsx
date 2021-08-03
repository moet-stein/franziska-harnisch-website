import React from 'react';
import PropTypes from 'prop-types';
import { ExhibitionsPageTemplate } from '../../templates/exhibitions-page';

const ExhibitionsPagePreview = ({ entry, getAsset }) => {
  const upcomingExhibitions = entry.getIn(['data', 'upcomingExhibitions']);
  const exhibitions = entry.getIn(['data', 'exhibitions']);
  console.log(upcomingExhibitions.toJS());
  console.log(exhibitions.toJS())

  // const chShImg = (i) => {
  //   const obj = {
  //     childImageSharp: {
  //       fluid: {
  //         src: i.image,
  //       },
  //     },
  //   };
  //   return obj;
  // };

  // const upArr = upcomingExhibitions.toJS()[0].upcomings.map((item) => {
  //   let temp = Object.assign({}, item);
  //   temp.image = chShImg(item);
  //   return temp;
  // });

  // const exArr = exhibitions.toJS().years.map((item) => {
  //   let temp = Object.assign({}, item);
  //   const listEx = temp.lOExhibitions.map((l) => {
  //     let ex = Object.assign({}, l);
  //     ex.image = chShImg(l);
  //     return ex;
  //   });
  //   temp.lOExhibitions = listEx;
  //   return temp;
  // });
  // const sendUpArr = [{ upcomings: upArr }];
  // const sendExArr = { years: exArr };

  return (
    <ExhibitionsPageTemplate
      title={entry.getIn(['data', 'title'])}
      upcomingExhibitions={upcomingExhibitions && upcomingExhibitions.toJS()}
      exhibitions={exhibitions && exhibitions.toJS()}
    />
  );
};

ExhibitionsPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
};

export default ExhibitionsPagePreview;
