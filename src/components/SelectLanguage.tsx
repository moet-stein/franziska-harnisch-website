import React from "react";
import PropTypes from "prop-types";
import { navigate } from "gatsby";
import { pages } from "../../data/pages.json";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles, } from "@material-ui/styles"
import { fade, } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
  list: {
    backgroundColor: fade(theme.palette.secondary.main, 0.9)
  },

}))

const SelectLanguage = ({ langs }) => {
    const classes = useStyles();
    console.log("langsSele", langs)
  return (
    <List component="ul" aria-label="languages" style={{ display: "flex" }}>
      {langs.map((lang) => (
        <ListItem
          //style={{ color }}
          key={lang.langKey}
          button
          onClick={(event) => {
            event.preventDefault();
            const { langKey } = lang;
            if (lang.link === "/") navigate(`/`);
            else if (!lang.link.includes("/de/")) {
              navigate(`${langkey}/${lang.link}`);
            } else if (lang.link.includes("/de/")) {
              navigate(`${lang.link}`);
            }
              
          }}
          selected={lang.selected}
        >
          <ListItemText className={classes.listItem}
            primary={lang.langKey} />
        </ListItem>
      ))
      }
    </List>
  );
};

SelectLanguage.propTypes = {
  langs: PropTypes.array,
};

export default SelectLanguage;
