import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import { Link } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import addToMailchimp from 'gatsby-plugin-mailchimp';
import PageContainer from '../components/PageContainer';
import useSiteMetadata from '../components/SiteMetadata';
import SEO from '../components/SEO';
import { FormattedMessage } from 'react-intl';
import SelectLanguage from '../components/SelectLanguage.tsx';
import { getCurrentLangKey, getLangs, getUrlForLang } from 'ptz-i18n';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: 50,
    display: 'flex',
     height: 'fit-content',
    marginRight: 50,
    justifyContent:"flex-end",
      [theme.breakpoints.down("sm")]: {
     margin:"0 auto",
     width:"fit-content",
     justifyContent:"center",
    },
    [theme.breakpoints.down(300)]: {
      maxWidth:300,
      margin:"auto 0",
     },
  },
  internalDiv:{
    display:"flex", 
    flexDirection:"column", 
    alignItems: 'flex-end', 
    textAlign: 'right' 
  },
  textContainer: {
    fontFamily: 'Josefin Sans',

    padding: 60,

    [theme.breakpoints.down("sm")]: {
      padding:0,
     },
     [theme.breakpoints.down(300)]: {
      maxWidth:250,
      margin: 0,
      fontSize:"0.75rem"
     },
  },
  websiteLink: {
    display: 'block',
    coursor: 'pointer',
    marginBottom: 10,
  },
  submitButton: {
    padding: 5,
    marginLeft: 5,
    fontFamily: 'Josefin Sans',
    backgroundColor: 'green,',
  },
  instagramLink: {
    coursor: 'pointer',
    display: 'block',
    color: 'black',
    marginTop: 5,
  },
  inputEmail:{
    width: 300,
    height: 30, 
    paddingLeft: 5 ,
    [theme.breakpoints.down(300)]:{
      width: 250
    },
  }
}));

export const ContactPageTemplate = ({
  title,
  name,
  address,
  email,
  website,
  websiteLink,
  instagram,
  input,
  agreeText,
  button,
  confirmation,
  errorMessage,
  agreeMessage,
  location,
}) => {
  if (location !== undefined) {
    const [userEmail, setUserEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [checkbox, setCheckbox] = useState(false);
  console.log('checkbox', checkbox);
  console.log('insta', instagram);

  const classes = useStyles();
  const handleCheckbox = (e) => {
    setCheckbox((prev) => !prev);
  };
  const handleChange = (e) => {
    e.preventDefault();
    setUserEmail(e.target.value);
  };
  let handleOnChange = (userEmail) => {
    // don't remember from where i copied this code, but this works.
    let re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (checkbox === false) {
      setEmailError(`${agreeMessage}`);
    } else if (re.test(userEmail) && checkbox === true) {
      // this is a valid email address
      addToMailchimp(userEmail);
      setEmailError(`${confirmation}`);
    } else {
      // invalid email, maybe show an error to the user.
      setEmailError(`${errorMessage}`);
    }
  };
  let handleSubmit = async (e) => {
    e.preventDefault();
    const check = await handleOnChange(userEmail);
    const result = await addToMailchimp(userEmail);
    // I recommend setting `result` to React state
    // but you can do whatever you want
  };
  const { languages } = useSiteMetadata();
  const url = location.pathname;
  const { langs, defaultLangKey } = languages;
  const langKey = getCurrentLangKey(langs, defaultLangKey, url);

  const datenschutzLink =
  langKey === 'en'
    ? `/${langKey}/datenschutzverordnung`
    : '/datenschutzverordnung';
const datenschutzText =
  langKey === 'en' ? 'Date protection regulation' : 'Datenschutzverordnung';
  return (
    <PageContainer title={title}>
      
      <div className={classes.container}>
        <div className={classes.internalDiv}>
          <div className={classes.textContainer}>
            <h3>{name}</h3>
            <p> {address}</p>
            <a
              className={classes.websiteLink}
              href={websiteLink}
            >
              {website}
            </a>
            <a
              style={{ coursor: 'pointer' }}
              href="mailto:franziska.harnisch@gmail.com?body=My custom mail body"
            >
              {email}
            </a>
            {instagram.map((link) => {
              return (
                <a className={classes.instagramLink} href={link.link}>
                  {link.text}
                </a>
              );
            })}

            <form>
              <p style={{ display: 'block' }}>{emailError}</p>
              <input
                className={classes.inputEmail}
                type="email"
                id="email"
                name="email"
                value={userEmail}
                onChange={handleChange}
                placeholder={input}
              />
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  alignItems: "flex-end",
                  margin: '10px auto',
                }}
              >
                <input
               style={{marginRight:10}}
                  type="checkbox"
                  id="agree"
                  name="agree"
                  checked={checkbox}
                  onChange={handleCheckbox}
                ></input>
                <label htmlFor="agree">
                {agreeText} </label> 
                
               
                
              </div>
              <Link style={{fontSize:12, marginLeft:5, display:"block", marginBottom:7}} href={datenschutzLink}>{datenschutzText}</Link>

              <button onClick={handleSubmit} className={classes.submitButton}>
                {button}
              </button>
            </form>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};
ContactPageTemplate.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string,
  address: PropTypes.string,
  website: PropTypes.string,
  websiteLink: PropTypes.string,
  email: PropTypes.string,
  instagram: PropTypes.shape({
    text: PropTypes.string,
    link: PropTypes.string,
  }),
  input: PropTypes.string,
  agreeText: PropTypes.string,
  button: PropTypes.string,
  confirmation: PropTypes.string,
  errorMessage: PropTypes.string,
  agreeMessage: PropTypes.string,
};

  const ContactPage = ({ data, location }) => {
    const { frontmatter } = data.markdownRemark;

    return (
      <Layout location={location}>
        <SEO
          title={frontmatter.title}
          location={location}
          description={frontmatter.description}
          image={frontmatter.image}
        />
        <ContactPageTemplate
          location={location}
          title={frontmatter.title}
          name={frontmatter.name}
          address={frontmatter.address}
          email={frontmatter.email}
          website={frontmatter.website}
          websiteLink={frontmatter.websiteLink}
          instagram={frontmatter.instagram}
          button={frontmatter.button}
          input={frontmatter.input}
          agreeText={frontmatter.agreeText}
          confirmation={frontmatter.confirmation}
          errorMessage={frontmatter.errorMessage}
          agreeMessage={frontmatter.agreeMessage}
        />
      </Layout>
    );
  }
};

ContactPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ContactPage;

export const contactPageQuery = graphql`
  query ContactPageTemplate($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        description
        image
        name
        address
        email
        website
        websiteLink
        instagram {
          text
          link
        }
        input
        agreeText
        button
        confirmation
        errorMessage
        agreeMessage
      }
    }
  }
`;


/* import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import { Link } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import addToMailchimp from 'gatsby-plugin-mailchimp';
import PageContainer from '../components/PageContainer';
import SEO from '../components/SEO';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: 50,
    display: 'flex',
     height: '100vh',
    marginRight: 50,
    justifyContent:"flex-end",
      [theme.breakpoints.down("sm")]: {
     margin:"0 auto",
     width:"fit-content",
     justifyContent:"center",
    },
    [theme.breakpoints.down(300)]: {
      maxWidth:300,
      margin:"auto 0",
     },
  },
  internalDiv:{
    display:"flex", 
    flexDirection:"column", 
    alignItems: 'flex-end', 
    textAlign: 'right' 
  },
  textContainer: {
    fontFamily: 'Josefin Sans',

    padding: 60,

    [theme.breakpoints.down("sm")]: {
      padding:0,
     },
     [theme.breakpoints.down(300)]: {
      maxWidth:250,
      margin: 0,
      fontSize:"0.75rem"
     },
  },
  websiteLink: {
    display: 'block',
    coursor: 'pointer',
    marginBottom: 10,
  },
  submitButton: {
    padding: 5,
    marginLeft: 5,
    fontFamily: 'Josefin Sans',
    backgroundColor: 'green,',
  },
  instagramLink: {
    coursor: 'pointer',
    display: 'block',
    color: 'black',
    marginTop: 5,
  },
  inputEmail:{
    width: 300,
    height: 30, 
    paddingLeft: 5 ,
    [theme.breakpoints.down(300)]:{
      width: 250
    },
  }
}));

export const ContactPageTemplate = ({
  title,
  name,
  address,
  email,
  website,
  websiteLink,
  instagram,
  input,
  button,
  confirmation,
  errorMessage,
  agreeMessage,
  location,
}) => {
  const [userEmail, setUserEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [checkbox, setCheckbox] = useState(false);
  console.log('checkbox', checkbox);
  console.log('insta', instagram);

  const classes = useStyles();
  const handleCheckbox = (e) => {
    setCheckbox((prev) => !prev);
  };
  const handleChange = (e) => {
    e.preventDefault();
    setUserEmail(e.target.value);
  };
  let handleOnChange = (userEmail) => {
    // don't remember from where i copied this code, but this works.
    let re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (checkbox === false) {
      setEmailError(`${agreeMessage}`);
    } else if (re.test(userEmail) && checkbox === true) {
      // this is a valid email address
      addToMailchimp(userEmail);
      setEmailError(`${confirmation}`);
    } else {
      // invalid email, maybe show an error to the user.
      setEmailError(`${errorMessage}`);
    }
  };
  let handleSubmit = async (e) => {
    e.preventDefault();
    const check = await handleOnChange(userEmail);
    const result = await addToMailchimp(userEmail);
    // I recommend setting `result` to React state
    // but you can do whatever you want
  };

  return (
    <PageContainer title={title}>
      <div className={classes.container}>
        <div className={classes.internalDiv}>
          <div className={classes.textContainer}>
            <h3>{name}</h3>
            <p> {address}</p>
            <a
              className={classes.websiteLink}
              href={websiteLink}
            >
              {website}
            </a>
            <a
              style={{ coursor: 'pointer' }}
              href="mailto:franziska.harnisch@gmail.com?body=My custom mail body"
            >
              {email}
            </a>
            {instagram.map((link) => {
              return (
                <a className={classes.instagramLink} href={link.link}>
                  {link.text}
                </a>
              );
            })}

            <form>
              <p style={{ display: 'block' }}>{emailError}</p>
              <input
                className={classes.inputEmail}
                type="email"
                id="email"
                name="email"
                value={userEmail}
                onChange={handleChange}
                placeholder={input}
              />
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  margin: '10px auto',
                }}
              >
                <input
               
                  type="checkbox"
                  id="agree"
                  name="agree"
                  checked={checkbox}
                  onChange={handleCheckbox}
                ></input>
                <label htmlFor="agree">
                  I agree to the <Link to="/datenschutzverordnung">terms of service</Link>
                </label>
              </div>

              <button onClick={handleSubmit} className={classes.submitButton}>
                {button}
              </button>
            </form>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};
ContactPageTemplate.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string,
  address: PropTypes.string,
  website: PropTypes.string,
  websiteLink: PropTypes.string,
  email: PropTypes.string,
  instagram: PropTypes.shape({
    text: PropTypes.string,
    link: PropTypes.string,
  }),
  input: PropTypes.string,
  button: PropTypes.string,
  confirmation: PropTypes.string,
  errorMessage: PropTypes.string,
  agreeMessage: PropTypes.string,
};

const ContactPage = ({ data, location }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout location={location}>
      <SEO
        title={frontmatter.title}
        location={location}
        description={frontmatter.description}
        image={frontmatter.image}
      />
      <ContactPageTemplate
        location={location}
        title={frontmatter.title}
        name={frontmatter.name}
        address={frontmatter.address}
        email={frontmatter.email}
        website={frontmatter.website}
        websiteLink={frontmatter.websiteLink}
        instagram={frontmatter.instagram}
        button={frontmatter.button}
        input={frontmatter.input}
        confirmation={frontmatter.confirmation}
        errorMessage={frontmatter.errorMessage}
        agreeMessage={frontmatter.agreeMessage}
      />
    </Layout>
  );
};

ContactPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ContactPage;

export const contactPageQuery = graphql`
  query ContactPageTemplate($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        description
        image
        name
        address
        email
        website
        websiteLink
        instagram {
          text
          link
        }
        input
        button
        confirmation
        errorMessage
        agreeMessage
      }
    }
  }
`;
 */