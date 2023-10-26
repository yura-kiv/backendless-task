import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "../components/Layout";
import tabs from "../assets/tabs.json";
import { getSortedTabs } from "../helpers/tabs.helper";
import TabContent from "../components/TabContent";

const AppRouter = () => {
  const sortedTabs = getSortedTabs(tabs);
  const defaultTab = sortedTabs[0];

  return (
    <Routes>
      <Route
        path="/"
        element={<Layout />}
      >
        <Route
          path="/:id"
          element={<TabContent tabs={sortedTabs} />}
        />
        ;
        <Route
          path="/"
          element={<Navigate to={`/${defaultTab.id}`} />}
        />
      </Route>
    </Routes>
  );
};

export default AppRouter;
