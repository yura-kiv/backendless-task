import React from "react";
import { Link } from "react-router-dom";

export const NavigationTab = ({ id, title, currentTabId }) => {
  const className = "navigation-btn " + (id === currentTabId ? "active" : "");
  return (
    <li className={className}>
      <Link to={`/${id}`}>{title}</Link>
    </li>
  );
};
