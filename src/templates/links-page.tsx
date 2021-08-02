import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import { Link } from '@material-ui/core'
import { makeStyles } from "@material-ui/core/styles";


export const LinksPageTemplate = ({ title, links }) => {
  console.log("links", links)

  return (
    <section >
      <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", marginTop:70}} >
      {links.map(l =>{
          return <p key={l.text}><a target="_blank" href={l.url}>{l.text}</a></p>
      })}
      </div>
    </section>
  )
}

LinksPageTemplate.propTypes = {
  title: PropTypes.string,
 links: PropTypes.shape({
  url: PropTypes.string,
  text: PropTypes.string,
    
  })}
 
const LinksPage = ({ data }) => {

  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <LinksPageTemplate
        title={frontmatter.title}
        links={frontmatter.links}
      />
    </Layout>
  )
}

LinksPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default LinksPage

export const linksPageQuery = graphql`
      query LinksPageTemplate {
        markdownRemark(frontmatter: {templateKey: {eq: "links-page" } }) {
        frontmatter {
        title
        links{
            url
            text
        }
     
       
        
       
      
      }
    }
  }
      `
