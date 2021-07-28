import React from 'react'
import PropTypes from 'prop-types'
import { HometwoTemplate } from '../../templates/hometwo-page'

const HometwoPreview = ({ entry, getAsset }) => {
    const data = entry.getIn(['data']).toJS()
    console.log(getAsset)
    console.log(data.intro)
    if (data) {
        return (
            <HometwoTemplate
                image={getAsset(data.image)}
                title={data.title}
                heading={data.heading}
                subheading={data.subheading}
                description={data.description}
                event={data.event}
                intro={data.intro || { blurbs: [] }}
                mainpitch={data.mainpitch || {}}
            />
        )
    } else {
        return <div>Loading...</div>
    }
}

HometwoPreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func,
    }),
    getAsset: PropTypes.func,
}

export default HometwoPreview
