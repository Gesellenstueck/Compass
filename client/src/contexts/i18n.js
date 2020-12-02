import React from "react";

export const I18nContext = React.createContext(null);

export const localDicts = {
  de: {
    welcome: "Guten Tag User",
    views: "Ansichten",
  },
  en: {
    welcome: "Hello User",
    views: "Views",
  },
};
