import React from 'react'
import PropTypes from 'prop-types'
import { ContactPageTemplate } from '../../templates/contact-page'

const ContactPagePreview = ({ entry, getAsset }) => {

  const data = entry.getIn(['data']).toJS();
  if (data) {

    return (
      <ContactPageTemplate
        title={data.title}
        name={data.name}
        address={data.address}
        website={data.website}
        instagram={data.instagram}
        




      />

    )

  } else {
    return <div>Loading...</div>
  }
}

ContactPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
  getAsset: PropTypes.func,
}

export default ContactPagePreview
