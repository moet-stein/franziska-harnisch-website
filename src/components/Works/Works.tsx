import React from 'react';
import PreviewCompatibleImage from '../PreviewCompatibleImage';
import Box from '@material-ui/core/Box';

export default function Works({ images }) {
  return (
    <div className="columns is-multiline">
      <Box>
        {images.map((item) => (
          <div key={item.text} className="column is-6">
            <section className="section">
              <div className="has-text-centered">
                <div
                  style={{
                    width: '240px',
                    display: 'inline-block',
                  }}
                >
                  <PreviewCompatibleImage imageInfo={item} />
                </div>
              </div>
              <p>{item.text}</p>
            </section>
          </div>
        ))}
      </Box>
    </div>
  );
}
