import React, { createContext, useContext, useState } from "react";

const PageContext = createContext();

export const usePageContext = () => {
  return useContext(PageContext);
};

export const PageProvider = ({ children }) => {
  const [pageTitle, setPageTitle] = useState("Restaurant");

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <PageContext.Provider value={{ pageTitle, setPageTitle, scrollToTop }}>
      {children}
    </PageContext.Provider>
  );
};
