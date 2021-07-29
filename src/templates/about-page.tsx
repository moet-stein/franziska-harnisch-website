import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import { makeStyles } from "@material-ui/core/styles";
import AboutBlocks from "../components/AboutBlocks/AboutBlocks"

export const AboutPageTemplate = ({ title, generalInfo, ausbildung, preise, einzelaustellung }) => {
  console.log(generalInfo.name)

  return (
    <section >
      <div >
        <div >
          <div >
            <div>
              <h2 >
                {title}
              </h2>
              <AboutBlocks generalInfo={generalInfo} ausbildung={ausbildung} preise={preise} einzelaustellung={einzelaustellung} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string,
  generalInfo: PropTypes.shape({
    name: PropTypes.string,
    address: PropTypes.string,
    website: PropTypes.string,
    email: PropTypes.string,
  }),
  ausbildung: PropTypes.shape({
    title: PropTypes.string,
    texts: PropTypes.array,
  }),
  preise: PropTypes.shape({
    title: PropTypes.string,
    texts: PropTypes.array
  }),
  einzelaustellung: PropTypes.shape({
    title: PropTypes.string,
    texts: PropTypes.array
  })

}

const AboutPage = ({ data }) => {

  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <AboutPageTemplate
        title={frontmatter.title}
        generalInfo={frontmatter.generalInfo}
        ausbildung={frontmatter.ausbildung}
        texts={frontmatter.texts}
        preise={frontmatter.preise}
        einzelaustellung={frontmatter.einzelaustellung}
      />
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage

export const aboutPageQuery = graphql`
      query AboutPageTemplate {
        markdownRemark(frontmatter: {templateKey: {eq: "about-page" } }) {
        frontmatter {
        title
        generalInfo{
        name
          address
      website
      email
        }
      ausbildung{
        title
        texts{
          text
        } 
        }
        preise{
          title
          texts{
            text
          }
        }
        einzelaustellung{
          title{
            texts{
              text
            }
          }
        }
      }
    }
  }
      `
