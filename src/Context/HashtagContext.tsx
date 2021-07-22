// 1. import the modules
import React, { createContext, useState } from 'react';

// 2. initialize the context
const initHashtagContext = {
  hashtag: '',
};
// 3. create context
export const HashtagContext = createContext(initHashtagContext);

// 4. make provider => value / children
export const HashtagProvider = ({ children }) => {
  const [hashtag, setHashtag] = useState(initHashtagContext.hashtag);

  return (
    <HashtagContext.Provider
      value={{
        hashtag,
        setHashtag,
      }}
    >
      {children}
    </HashtagContext.Provider>
  );
};
