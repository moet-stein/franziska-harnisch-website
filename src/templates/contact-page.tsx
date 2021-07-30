import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import { Link } from '@material-ui/core'
import { makeStyles } from "@material-ui/core/styles";


export const ContactPageTemplate = ({ title, generalInfo, ausbildung, preise, einzelaustellung, gruppenaustellung, projekte }) => {
  console.log(generalInfo.name)

  return (
    <section >
      <div >
        <div >
          <div >
            <div >
           
              </div>
          </div>
        </div>
      </div>
    </section>
  )
}
ContactPageTemplate.propTypes = {
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
  }),
  gruppenaustellung: PropTypes.shape({
    title: PropTypes.string,
    texts: PropTypes.array
  }),
  projekte: PropTypes.shape({
    title: PropTypes.string,
    texts: PropTypes.array
  }),

}

const ContactPage = ({ data }) => {

  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <ContactPageTemplate
        title={frontmatter.title}
        generalInfo={frontmatter.generalInfo}
        ausbildung={frontmatter.ausbildung}
        texts={frontmatter.texts}
        preise={frontmatter.preise}
        einzelaustellung={frontmatter.einzelaustellung}
        gruppenaustellung={frontmatter.gruppenaustellung}
        projekte={frontmatter.projekte}
      />
    </Layout>
  )
}

ContactPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default ContactPage

export const contactPageQuery = graphql`
      query ContactPageTemplate {
        markdownRemark(frontmatter: {templateKey: {eq: "contact-page" } }) {
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
          title
            texts{
              text
            }
        }
        gruppenaustellung{
          title
            texts{
              text
            }
        }
        projekte{
          title
            texts{
              text
            }
        }
      }
    }
  }
      `
