import React from 'react'
import PropTypes from 'prop-types'
import {ImpressumPageTemplate} from '../../templates/impressum-page'

const ImpressumPagePreview = ({ entry, getAsset }) => {

  const data = entry.getIn(['data']).toJS();
  if (data) {

    return (
      <ImpressumPageTemplate
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

ImpressumPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
  getAsset: PropTypes.func,
}

export default ImpressumPagePreview