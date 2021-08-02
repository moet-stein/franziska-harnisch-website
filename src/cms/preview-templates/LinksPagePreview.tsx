import React from 'react'
import PropTypes from 'prop-types'
import { LinksPageTemplate } from '../../templates/links-page'

const LinksPagePreview = ({ entry, getAsset }) => {

  const data = entry.getIn(['data']).toJS();
  console.log("data", data)
  if (data) {

    return (
      <LinksPageTemplate
        title={data.title}
        links={data.links}





      />

    )

  } else {
    return <div>Loading...</div>
  }
}

LinksPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
  getAsset: PropTypes.func,
}

export default LinksPagePreview