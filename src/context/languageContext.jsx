import { createContext, useState, useEffect } from "react";
import i18n from "../../i18n";

export const LanguageContext = createContext(null);

const LanguageContextProvider = ({ children }) => {
  const [language, setLanguage] = useState("es");

  const changeLanguage = (lng) => {
    setLanguage(lng);
    i18n.changeLanguage(lng);
  };
  
  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContextProvider;
