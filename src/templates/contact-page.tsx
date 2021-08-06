import React, {useState} from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import { Link } from '@material-ui/core'
import { makeStyles } from "@material-ui/core/styles";
import addToMailchimp from 'gatsby-plugin-mailchimp'


export const ContactPageTemplate = ({title, name, address,email, website, instagram}) => {
  const [userEmail, setUserEmail] = useState("")
  const [emailError, setEmailError] = useState("")
  
  const handleChange = (e) => {
    e.preventDefault();
    setUserEmail(e.target.value)
  }
  let handleOnChange = ( userEmail) => {
    
    // don't remember from where i copied this code, but this works.
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if ( re.test(userEmail) ) {
        // this is a valid email address
       addToMailchimp(userEmail)
     setEmailError("Thank you for submitting our newsletter")
    }
    else {
        // invalid email, maybe show an error to the user.
      setEmailError("Please add a valid email address")
    }

  }
   let handleSubmit = async (e) => {
     e.preventDefault();
     const check = await handleOnChange(userEmail)
    const result = await addToMailchimp(userEmail)
    // I recommend setting `result` to React state
    // but you can do whatever you want
  }

  return (
    <section >
          <div style={{ marginTop:50, 
              display: "flex", flexDirection: "column",  height:"100vh", marginRight:50}} >
            <div style={{alignItems:"center", textAlign:"right"}}>
        
              <div style={{ background: "linear-gradient(90deg, rgba(250,248,245,1) 2%, rgba(251,250,249,1) 44%, rgba(142,142,143,1) 100%)", padding:30}}>
              <h3 style={{fontFamily:"Josefin-Sans",}}>{name}</h3>
              <p> {address}</p>
              <a style={{display:"block", coursor:"pointer", marginBottom:10}} href="https://www.franziskaharnisch.de/">{website}</a>
          <a  style={{coursor:"pointer"}}  href="mailto:lauratronchin@hotmail.it?body=My custom mail body">{email}</a>
           <form>
              <p >Join the newsletter</p>
              <p>{emailError}</p>
              <input type="email" id="email" name="email" value={userEmail} onChange={handleChange} />
              <button  onClick={handleSubmit} >Submit</button>
                  </form>
                  </div>
              </div>
              </div>
    </section>
  )
}
ContactPageTemplate.propTypes = {
  title: PropTypes.string,
    name: PropTypes.string,
    address: PropTypes.string,
    website: PropTypes.string,
    email: PropTypes.string,
      instagram: PropTypes.string,
}

const ContactPage = ({ data }) => {

  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <ContactPageTemplate
        title={frontmatter.title}
       name={frontmatter.name}
    address={frontmatter.address}
    email={frontmatter.email}
     website={frontmatter.website}
       instagram={frontmatter.instagram}
      
      />
    </Layout>
  )
}

ContactPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default ContactPage

export const contactPageQuery = graphql`
      query ContactPageTemplate ($id: String!) {
        markdownRemark(id: { eq: $id }) {
        frontmatter {
        title
        name
        address
        email
        website
        instagram
    
       
      }
    }
  }
      `
