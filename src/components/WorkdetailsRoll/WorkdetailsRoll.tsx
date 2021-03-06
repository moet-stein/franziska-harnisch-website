import React, { useEffect, useState, useContext } from 'react';
import { useMediaQuery } from 'react-responsive';
import PropTypes from 'prop-types';
import { graphql, StaticQuery } from 'gatsby';
import Works from '../Works/Works';
import Chip from '@material-ui/core/Chip';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import useSiteMetadata from '../SiteMetadata';
import { getCurrentLangKey, getLangs, getUrlForLang } from 'ptz-i18n';
import { NavBarContext } from '../../context/NavbarContext';
import PageContainer from '../PageContainer';
import { FormattedMessage } from 'react-intl';
import IconButton from '@material-ui/core/IconButton';
import DetailsIcon from '@material-ui/icons/Details';
import ChangeHistoryIcon from '@material-ui/icons/ChangeHistory';

export function WorkdetailsRoll({ data, location }) {
  const { negZIndex } = useContext(NavBarContext);
  const { edges: posts } = data.allMarkdownRemark;
  const [hashtags, setHashtags] = useState([]);
  const [selectedHash, setSelectedHash] = useState([]);
  const [showHash, setShowHash] = useState(false);
  const [loading, setLoading] = useState(true);
  const [allSelected, setAllSelected] = useState(true);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [first, setFirst] = useState(true);
  const { languages } = useSiteMetadata();
  const { langs, defaultLangKey } = languages;
  const url = location.pathname;
  const langKey = getCurrentLangKey(langs, defaultLangKey, url);

  // const isDesktopOrLaptop = useMediaQuery({
  //   query: '(min-width: 1224px)',
  // });
  // const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' });
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 800px)' });
  // const isPortrait = useMediaQuery({ query: '(orientation: portrait)' });
  // const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' });

  const showMoreHash = () => {
    showHash ? setShowHash(false) : setShowHash(true);
    console.log('hashclicked');
    console.log(showHash);
  };

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
    console.log(first);
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
    let allHash;
    setFirst(false);
    console.log(first);
    if (!first) {
      setHashtags(hashtags);
    } else {
      console.log('true first');
      allHash = shuffle(
        posts
          .map((p) => p.node.frontmatter.hashtags.map((h) => h.hashtag))
          .flat()
      );
      setHashtags([...new Set(allHash)]);
    }

    filHash();
  }, [selectedHash, showHash]);

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
              label={<FormattedMessage id="findWork" />}
              onChange={(e) => handleSearch(e)}
            />
          </Box>
        ) : (
          <Box m={3}>
            <TextField
              id="standard-basic"
              label={<FormattedMessage id="findWork" />}
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
            !isTabletOrMobile &&
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
          {/* Phone size Hashtags */}
          {isTabletOrMobile &&
            !showHash &&
            hashtags.length > 0 &&
            hashtags.slice(0, 5).map((h) => (
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
          {isTabletOrMobile &&
            showHash &&
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
          {isTabletOrMobile && !showHash && (
            <IconButton onClick={showMoreHash}>
              {negZIndex ? (
                <DetailsIcon style={{ zIndex: '-1000' }} />
              ) : (
                <DetailsIcon />
              )}
            </IconButton>
          )}
          {isTabletOrMobile && showHash && (
            <IconButton onClick={showMoreHash}>
              {negZIndex ? (
                <ChangeHistoryIcon style={{ zIndex: '-1000' }} />
              ) : (
                <ChangeHistoryIcon />
              )}
            </IconButton>
          )}

          {/* Phone size hash done */}
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
