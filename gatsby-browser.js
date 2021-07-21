import React from 'react';
import { HashtagProvider } from './src/context/HashtagContext';

export const wrapRootElement = ({ element }) => (
  <HashtagProvider>{element}</HashtagProvider>
);
