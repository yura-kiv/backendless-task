import React, { lazy, Suspense } from "react";
import { Navigate, useParams } from "react-router-dom";

const TabContent = ({ tabs }) => {
  const { id } = useParams();
  const tab = tabs.find((tab) => tab.id === id);

  if (!tab) {
    return <Navigate to={`/${tabs[0].id}`} />;
  }

  const TabComponent = lazy(() => import(`../${tab.path}`));

  return (
    <div className="tab-content">
      <Suspense fallback={<div>Loading...</div>}>
        <TabComponent />
      </Suspense>
    </div>
  );
};

export default TabContent;
