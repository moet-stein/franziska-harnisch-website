import React from 'react';
import WorksImage from '../WorksImage/WorksImage';
import Box from '@material-ui/core/Box';

export default function Works({ posts }) {
  return (
    <div className="columns is-multiline">
      {posts && (
        <Box
          display="flex"
          flexWrap="wrap"
          justifyContent="center"
          alignItems="center"
          m={3}
          mb={10}
        >
          {posts
            .map((p) => p.node)
            .map((item) => (
              <Box key={item.id} m={1}>
                <div
                  style={{
                    width: '240px',
                    display: 'inline-block',
                  }}
                >
                  <WorksImage
                    imageInfo={item.frontmatter.featuredimage}
                    title={item.frontmatter.title}
                    slug={item.fields.slug}
                  />
                </div>
              </Box>
            ))}
        </Box>
      )}
    </div>
  );
}
