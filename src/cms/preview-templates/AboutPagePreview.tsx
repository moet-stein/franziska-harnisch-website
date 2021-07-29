import React from 'react'
import PropTypes from 'prop-types'
import { AboutPageTemplate } from '../../templates/about-page'

const AboutPagePreview = ({ entry, getAsset }) => {

  const data = entry.getIn(['data']).toJS();
  if (data) {
    console.log(data)
    return (
      <AboutPageTemplate
        title={data.title}
        generalInfo={data.generalInfo}
        ausbildung={data.ausbildung}




      />

    )

  } else {
    return <div>Loading...</div>
  }
}

AboutPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
  getAsset: PropTypes.func,
}

export default AboutPagePreview
