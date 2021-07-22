// 1. import the modules
import React, { createContext, useState } from 'react';

// 2. initialize the context

const initHashtagContext = {
  hashtag: '',
};
// 3. create context
export const HashtagContext = createContext(initHashtagContext);

// 4. make provider
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

// import React, { createContext, useState } from 'react';

// interface HashtagContextInterface {
//   hashtag: string;
// }

// const HashtagCtx = React.createContext<HashtagContextInterface | null>(null);

// const hashtagContext: HashtagContextInterface = {
//   hashtag: '',
// };

// export const HashtagProvider = () => (
//   <HashtagCtx.Provider value={hashtagContext}>...</HashtagCtx.Provider>
// );

// **********

// interface IHashtag {
//   hashtag: string
// }

// type ContextType = {
//   todos: IHashtag[]
//   saveTodo: (todo: ITodo) => void
//   updateTodo: (id: number) => void
// }

// export const HastagContext = React.createContext(null);

// const HashtagProvider: React.FC = ({ children }) => {
//   const [hashtag, setHashtag] = React.useState<ITodo[]>([
//     {
//       id: 1,
//       title: "post 1",
//       description: "this is my first description",
//       status: false
//     },
//     {
//       id: 2,
//       title: "post 2",
//       description: "this is my second description",
//       status: true
//     }
//   ]);
