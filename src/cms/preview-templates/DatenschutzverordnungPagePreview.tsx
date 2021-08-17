import React from 'react'
import PropTypes from 'prop-types'
import {DatenschutzPageTemplate } from '../../templates/datenschutzverordnung-page'

const DatenschutzPagePreview = ({ entry, getAsset }) => {

  const data = entry.getIn(['data']).toJS();
  if (data) {

    return (
      <DatenschutzPageTemplate
        title={data.title}
        titleWebsite={data.title}
        description={data.description}
        image={data.image}
        html={data.html}




      />

    )

  } else {
    return <div>Loading...</div>
  }
}

DatenschutzPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
  getAsset: PropTypes.func,
}

export default DatenschutzPagePreview