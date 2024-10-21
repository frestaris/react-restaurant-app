import React, { createContext, useContext, useState } from "react";

const PageContext = createContext();

export const usePageContext = () => {
  return useContext(PageContext);
};

export const PageProvider = ({ children }) => {
  const [pageTitle, setPageTitle] = useState("Restaurant");

  return (
    <PageContext.Provider value={{ pageTitle, setPageTitle }}>
      {children}
    </PageContext.Provider>
  );
};
