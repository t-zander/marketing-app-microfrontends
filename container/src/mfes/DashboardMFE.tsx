import React, { useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
// @ts-ignore
import { mount as mountDashboardApp } from 'dashboard/DashboardApp';

function DashboardMFE() {
  const dashboardAppContainerRef = useRef<HTMLDivElement>(null);
  const history = useHistory();

  useEffect(() => {
    if (dashboardAppContainerRef) {
      // mount marketing app to container app
      const { onParentNavigate } = mountDashboardApp(
        dashboardAppContainerRef.current
      );
      history.listen(onParentNavigate);
    }
  }, []);

  return <div ref={dashboardAppContainerRef} />;
}

export default DashboardMFE;
