import React, { createContext, useState } from "react";

export const HomePageDataContext = createContext(null);

const HomePageDataProvider = (props) => {
  const data = props.data;
  const [currentData, setCurrentData] = useState(data);
  return (
    <HomePageDataContext.Provider value={{ data, currentData, setCurrentData }}>
      {props.children}
    </HomePageDataContext.Provider>
  );
};

export default HomePageDataProvider;
