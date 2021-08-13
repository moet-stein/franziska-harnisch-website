import React, { useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { graphql, StaticQuery } from 'gatsby';
import Works from '../Works/Works';
import Chip from '@material-ui/core/Chip';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import useSiteMetadata from '../SiteMetadata';
import { getCurrentLangKey, getLangs, getUrlForLang } from 'ptz-i18n';
import { NavBarContext } from '../../context/NavbarContext';
import PageContainer from '../PageContainer';

// let langKey;

const useStyles = makeStyles(() => ({
  goBack: {
    zIndex: -10,
  },
}));

export function WorkdetailsRoll({ data, location }) {
  const { negZIndex } = useContext(NavBarContext);
  const classes = useStyles();
  const { edges: posts } = data.allMarkdownRemark;
  const [hashtags, setHashtags] = useState([]);
  const [selectedHash, setSelectedHash] = useState([]);
  const [loading, setLoading] = useState(true);
  const [allSelected, setAllSelected] = useState(true);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const { languages } = useSiteMetadata();
  const { langs, defaultLangKey } = languages;
  const url = location.pathname;
  const langKey = getCurrentLangKey(langs, defaultLangKey, url);

  const filHash = () => {
    if (selectedHash.length == 0) {
      const filtered = shuffle(
        posts.filter((p) => p.node.frontmatter.language === langKey)
      );
      setFilteredPosts(filtered);

      setLoading(false);
    } else {
      const filtered = shuffle(
        posts.filter(
          (p) =>
            p.node.frontmatter.hashtags
              .map((h) => h.hashtag)
              .some((i) => selectedHash.includes(i)) &&
            p.node.frontmatter.language === langKey
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

  const rollContent = () => (
    <PageContainer>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        {negZIndex ? (
          <Box m={3} style={{ zIndex: '-1000' }}>
            <TextField
              id="standard-basic"
              label="Find Work"
              onChange={(e) => handleSearch(e)}
            />
          </Box>
        ) : (
          <Box m={3}>
            <TextField
              id="standard-basic"
              label="Find Work"
              onChange={(e) => handleSearch(e)}
            />
          </Box>
        )}
        <Box
          display="flex"
          flexWrap="wrap"
          justifyContent="center"
          alignItems="center"
        >
          {negZIndex ? (
            <Box ml={1} mb={1} style={{ zIndex: '-1000' }}>
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
          ) : (
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
          )}

          {!loading &&
            hashtags.length > 0 &&
            hashtags.map((h) => (
              <Box ml={1} mb={1} key={`hashtag-${h}`}>
                {selectedHash.includes(h) ? (
                  <Box>
                    {negZIndex ? (
                      <Chip
                        label={<Typography variant="body2"># {h}</Typography>}
                        onClick={() => handleClick(h)}
                        clickable
                        style={{ zIndex: '-1000' }}
                      />
                    ) : (
                      <Chip
                        label={<Typography variant="body2"># {h}</Typography>}
                        onClick={() => handleClick(h)}
                        clickable
                      />
                    )}
                  </Box>
                ) : (
                  <Box>
                    {negZIndex ? (
                      <Chip
                        label={<Typography variant="body2"># {h}</Typography>}
                        onClick={() => handleClick(h)}
                        variant="outlined"
                        style={{ zIndex: '-1000' }}
                      />
                    ) : (
                      <Chip
                        label={<Typography variant="body2"># {h}</Typography>}
                        onClick={() => handleClick(h)}
                        variant="outlined"
                      />
                    )}
                  </Box>
                )}
              </Box>
            ))}
        </Box>
        {negZIndex ? (
          <Box style={{ zIndex: '-1000' }}>
            {!loading && filteredPosts && <Works posts={filteredPosts} />}
          </Box>
        ) : (
          <Box>
            {!loading && filteredPosts && <Works posts={filteredPosts} />}
          </Box>
        )}
      </Box>
    </PageContainer>
  );

  return <React.Fragment>{rollContent()}</React.Fragment>;
  // <Box
  //   display="flex"
  //   flexDirection="column"
  //   justifyContent="center"
  //   alignItems="center"
  // >
  //   <Box m={3}>
  //     <TextField
  //       id="standard-basic"
  //       label="Find Work"
  //       onChange={(e) => handleSearch(e)}
  //     />
  //   </Box>
  //   <Box
  //     display="flex"
  //     flexWrap="wrap"
  //     justifyContent="center"
  //     alignItems="center"
  //   >
  //     <Box ml={1} mb={1}>
  //       {allSelected ? (
  //         <Chip
  //           label={<Typography variant="body2"># ALL</Typography>}
  //           onClick={handleAll}
  //           clickable
  //         />
  //       ) : (
  //         <Chip
  //           label={<Typography variant="body2"># ALL</Typography>}
  //           onClick={handleAll}
  //           variant="outlined"
  //         />
  //       )}
  //     </Box>
  //     {!loading &&
  //       hashtags.length > 0 &&
  //       hashtags.map((h) => (
  //         <Box ml={1} mb={1} key={`hashtag-${h}`}>
  //           {selectedHash.includes(h) ? (
  //             <Chip
  //               label={<Typography variant="body2"># {h}</Typography>}
  //               onClick={() => handleClick(h)}
  //               clickable
  //             />
  //           ) : (
  //             <Chip
  //               label={<Typography variant="body2"># {h}</Typography>}
  //               onClick={() => handleClick(h)}
  //               variant="outlined"
  //             />
  //           )}
  //         </Box>
  //       ))}
  //   </Box>
  //   <Box>{!loading && filteredPosts && <Works posts={filteredPosts} />}</Box>
  // </Box>
  // }
}

WorkdetailsRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default ({ location }) => (
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
                language
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
    render={(data, count) => (
      <WorkdetailsRoll data={data} count={count} location={location} />
    )}
  />
);
