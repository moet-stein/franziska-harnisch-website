// 1. import the modules
import React, { createContext, useState } from 'react';

// 2. initialize the context
const initNavBarContext = {
  negZIndex: false,
};

// 3. create context
export const NavBarContext = createContext(initNavBarContext);

// 4. make provider => value / children
export const NavBarProvider = ({ children }) => {
  const [negZIndex, setNegZIndex] = useState(initNavBarContext.negZIndex);

  return (
    <NavBarContext.Provider
      value={{
        negZIndex,
        setNegZIndex,
      }}
    >
      {children}
    </NavBarContext.Provider>
  );
};
