import Card from "../components/Card/Card";
import React, { useContext } from "react";
import { I18nContext } from "../contexts/i18n";

function Dashboard() {
  const dict = useContext(I18nContext);
  return (
    <>
      <h2>{dict.welcome}</h2>
      <p>tbd. </p>
      <Card backgroundColor="pink" />
    </>
  );
}

export default Dashboard;
