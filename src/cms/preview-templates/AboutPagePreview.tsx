import React from 'react'
import PropTypes from 'prop-types'
import { AboutPageTemplate } from '../../templates/about-page'

const AboutPagePreview = ({ entry, getAsset }) => {

  const data = entry.getIn(['data']).toJS();
  if (data) {

    return (
      <AboutPageTemplate
        title={data.title}
        generalInfo={data.generalInfo}
        ausbildung={data.ausbildung}
        preise={data.preise}
        einzelaustellung={data.einzelaustellung}
        gruppenaustellung={data.gruppenaustellung}
        projekte={data.projekte}




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
