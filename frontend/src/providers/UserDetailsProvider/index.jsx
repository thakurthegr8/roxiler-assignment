import React, { createContext, useState } from "react";

export const UserDetailsContext = createContext(null);

const UserDetailsProvider = (props) => {
  const [currentId, setCurrentId] = useState(null);
  return (
    <UserDetailsContext.Provider value={{ currentId, setCurrentId }}>
      {props.children}
    </UserDetailsContext.Provider>
  );
};

export default UserDetailsProvider;
