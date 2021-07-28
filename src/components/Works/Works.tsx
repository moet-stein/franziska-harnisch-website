import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'gatsby';
import WorksImage from '../WorksImage/WorksImage';
import Box from '@material-ui/core/Box';
import {
  HashtagContext,
  HashtagProvider,
} from '../../Context/HashtagContext.tsx';

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
        >
          {posts
            .map((p) => p.node)
            .map((item) => (
              <Box key={item.id} m={1}>
                <div className="column is-6">
                  <section className="section">
                    <div className="has-text-centered">
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
                    </div>
                  </section>
                </div>
              </Box>
            ))}
        </Box>
      )}
    </div>
  );
}
