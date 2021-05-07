import React, { ReactElement, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
// @ts-ignore
import { mount as mountMarketingApp } from 'marketing/MarketingApp';

interface Props {}

function MarketingMFE({}: Props): ReactElement {
  const marketingAppContainerRef = useRef<HTMLDivElement>(null);
  const history = useHistory();

  useEffect(() => {
    if (marketingAppContainerRef) {
      // mount marketing app to container app
      const { onParentNavigate } = mountMarketingApp(
        marketingAppContainerRef.current,
        {
          onNavigate: ({ pathname: nextPathName }: Location) => {
            const { pathname: currentPathName } = history.location;
            if (currentPathName !== nextPathName) {
              history.push(nextPathName);
            }
          },
          initialPath: history.location.pathname
        }
      );
      history.listen(onParentNavigate);
    }
  }, []);

  return <div ref={marketingAppContainerRef} />;
}

export default MarketingMFE;
