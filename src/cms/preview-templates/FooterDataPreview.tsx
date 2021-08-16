import React from 'react';
import PropTypes from 'prop-types';
import { FooterDataTemplate } from '../../templates/footer-data';

const FooterDataPreview = ({ entry }) => {

  return (
    <FooterDataTemplate
    copyright={entry.getIn(['data', 'copyright'])}
    />
  );
};

FooterDataPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
};

export default FooterDataPreview;
