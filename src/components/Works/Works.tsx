import React, { useEffect, useState, useContext } from 'react';
import WorksImage from '../WorksImage/WorksImage';
import Box from '@material-ui/core/Box';
import {
  HashtagContext,
  HashtagProvider,
} from '../../Context/HashtagContext.tsx';

export default function Works({ images }) {
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);
  const { hashtag } = useContext(HashtagContext);
  console.log(hashtag);

  useEffect(() => {
    console.log('here is works', hashtag);
    if (!hashtag.length) {
      setFiltered(images);
      setLoading(false);
    } else {
      setFiltered(images.filter((i) => i.hashtags.includes(hashtag)));
      setLoading(false);
    }
  }, [hashtag]);

  return (
    // <HashtagProvider>
    <div className="columns is-multiline">
      {!loading && (
        <Box
          display="flex"
          flexWrap="wrap"
          justifyContent="center"
          alignItems="center"
        >
          {filtered.map((item) => (
            <Box key={item.text} m={1}>
              <div className="column is-6">
                <section className="section">
                  <div className="has-text-centered">
                    <div
                      style={{
                        width: '240px',
                        display: 'inline-block',
                      }}
                    >
                      <WorksImage imageInfo={item} />
                    </div>
                  </div>
                </section>
              </div>
            </Box>
          ))}
        </Box>
      )}
    </div>
    // </HashtagProvider>
  );
}
