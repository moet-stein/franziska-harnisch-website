import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

const PreviewCompatibleImage = ({ imageInfo }) => {
    console.log("info", imageInfo)
    const imageStyle = { borderRadius: '5px' }
    const { alt = '', childImageSharp, image } = imageInfo

    if (!!image && !!image.childImageSharp) {
        return (
            <Img style={imageStyle} fluid={image.childImageSharp.fluid} alt={alt} />
        )
    }

    if (!!childImageSharp) {
        return <Img style={imageStyle} fluid={childImageSharp.fluid} alt={alt} />
    }

    if (!!image && typeof image === 'string' && childImageSharp.fluid === "undefined")

        return <img style={imageStyle} src={image} alt={alt} />

    return null
}

PreviewCompatibleImage.propTypes = {
    imageInfo: PropTypes.shape({
        alt: PropTypes.string,
        childImageSharp: PropTypes.object,
        image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
        style: PropTypes.object,
    }).isRequired,
}

export default PreviewCompatibleImage

/* import React from 'react'
import Img from 'gatsby-image';
export default function PreviewCompatibleImage({ image, fluid }) {
    console.log("image", image)
    console.log("fluid", fluid)
    return (<div>
        <Img title={!fluid ? image : fluid} />
    </div>)
} */