import React from 'react';
import WorksImage from '../WorksImage/WorksImage';
import Box from '@material-ui/core/Box';

export default function Works({ images }) {
  return (
    <div className="columns is-multiline">
      <Box display="flex" flexWrap="wrap">
        {images.map((item) => (
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
    </div>
  );
}
