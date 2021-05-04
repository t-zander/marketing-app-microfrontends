import React, { ReactElement, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
// @ts-ignore
import { mount as mountMarketingApp } from 'marketing/MarketingApp';

interface Props {}

function MarketingApp({}: Props): ReactElement {
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
          }
        }
      );
      history.listen(onParentNavigate);
    }
  }, []);

  return <div ref={marketingAppContainerRef} />;
}

export default MarketingApp;
