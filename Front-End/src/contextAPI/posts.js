import { createContext } from 'react';

export const PostContext = createContext({
  cards: [{}],
  setPost: async () => {},
});
