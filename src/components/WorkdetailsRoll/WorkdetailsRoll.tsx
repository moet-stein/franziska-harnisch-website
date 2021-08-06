import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link, graphql, StaticQuery } from 'gatsby';
import Works from '../Works/Works';
import Chip from '@material-ui/core/Chip';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  goBack: {
    zIndex: -10,
  },
}));

export function WorkdetailsRoll({ data }) {
  // render() {
  // const { data } = this.props;
  const classes = useStyles();
  const { edges: posts } = data.allMarkdownRemark;
  const [hashtags, setHashtags] = useState([]);
  const [selectedHash, setSelectedHash] = useState([]);
  const [loading, setLoading] = useState(true);
  const [allSelected, setAllSelected] = useState(true);
  const [filteredPosts, setFilteredPosts] = useState([]);
  console.log(posts);

  const filHash = () => {
    if (selectedHash.length == 0) {
      const shuffled = shuffle(posts);
      setFilteredPosts(shuffled);
      setLoading(false);
    } else {
      const filtered = shuffle(
        posts.filter((p) =>
          p.node.frontmatter.hashtags
            .map((h) => h.hashtag)
            .some((i) => selectedHash.includes(i))
        )
      );
      setFilteredPosts(filtered);
      setLoading(false);
    }
  };

  const handleClick = (h) => {
    if (selectedHash.includes(h)) {
      const newArr = selectedHash.filter((i) => i !== h);

      setSelectedHash(newArr);
      console.log(newArr);
    } else {
      setSelectedHash((prevArray) => [...prevArray, h]);
      console.log(h);
    }

    setAllSelected(false);
  };

  const handleAll = () => {
    allSelected ? setAllSelected(false) : setAllSelected(true);
    setSelectedHash([]);
  };

  const handleSearch = (e) => {
    if (e.target.value.length === 0) {
      filHash();
    } else {
      const searchedArr = filteredPosts.filter((p) =>
        p.node.frontmatter.title
          .toLowerCase()
          .includes(e.target.value.toLowerCase())
      );
      setFilteredPosts(searchedArr);
    }
  };

  const shuffle = (array) => {
    var currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
    return array;
  };

  useEffect(() => {
    const allHash = posts
      .map((p) => p.node.frontmatter.hashtags.map((h) => h.hashtag))
      .flat();
    setHashtags([...new Set(allHash)]);

    filHash();
  }, [selectedHash]);

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Box m={3}>
        <TextField
          id="standard-basic"
          label="Find Work"
          onChange={(e) => handleSearch(e)}
        />
      </Box>
      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="center"
        alignItems="center"
      >
        <Box ml={1} mb={1}>
          {allSelected ? (
            <Chip
              label={<Typography variant="body2"># ALL</Typography>}
              onClick={handleAll}
              clickable
            />
          ) : (
            <Chip
              label={<Typography variant="body2"># ALL</Typography>}
              onClick={handleAll}
              variant="outlined"
            />
          )}
        </Box>
        {!loading &&
          hashtags.length > 0 &&
          hashtags.map((h) => (
            <Box ml={1} mb={1} key={`hashtag-${h}`}>
              {selectedHash.includes(h) ? (
                <Chip
                  label={<Typography variant="body2"># {h}</Typography>}
                  onClick={() => handleClick(h)}
                  clickable
                />
              ) : (
                <Chip
                  label={<Typography variant="body2"># {h}</Typography>}
                  onClick={() => handleClick(h)}
                  variant="outlined"
                />
              )}
            </Box>
          ))}
      </Box>
      <Box>{!loading && filteredPosts && <Works posts={filteredPosts} />}</Box>
    </Box>
  );
  // }
}

WorkdetailsRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default () => (
  <StaticQuery
    query={graphql`
      query WorkdetailsRollQuery {
        allMarkdownRemark(
          filter: { frontmatter: { templateKey: { eq: "workdetails-post" } } }
        ) {
          edges {
            node {
              id
              excerpt
              fields {
                slug
              }
              frontmatter {
                title
                subTitle
                links {
                  linkName
                  linkURL
                }
                layoutType
                templateKey
                hashtags {
                  hashtag
                }
                images {
                  imageTitle
                  image
                }
                featuredimage
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <WorkdetailsRoll data={data} count={count} />}
  />
);
