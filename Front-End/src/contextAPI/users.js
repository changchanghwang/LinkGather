import { createContext, useState } from 'react';

export const UserContext = createContext({ isLogin: false, setIsLogin: () => {} });

const Store = (props) => {
  const [isLogin, SetIsLogin] = useState(false);

  const handleChange = () => {};

  return (
    <UserContext.Provider value={{ isLogin, handleChange }}>{props.children}</UserContext.Provider>
  );
};

export default Store;
