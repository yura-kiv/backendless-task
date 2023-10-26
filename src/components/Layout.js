import React from "react";
import tabs from "../assets/tabs.json";
import { NavigationTab } from "./NavigationTab";
import { getSortedTabs } from "../helpers/tabs.helper";
import { Outlet, useParams } from "react-router-dom";

const Layout = () => {
  const { id } = useParams();
  const sortedTabs = getSortedTabs(tabs);
  return (
    <div className="main-card-wrapper">
      <div className="navigation-wrapper">
        <ul className="navigation">
          {sortedTabs.map((tab) => {
            return (
              <NavigationTab
                key={tab.id}
                {...tab}
                currentTabId={id}
              />
            );
          })}
        </ul>
      </div>
      <div className="content-wrapper">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
