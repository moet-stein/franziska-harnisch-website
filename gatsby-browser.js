import React from 'react';
import { HashtagProvider } from './src/context/HashtagContext.tsx';

export const wrapRootElement = ({ element }) => (
  <HashtagProvider>{element}</HashtagProvider>
);
