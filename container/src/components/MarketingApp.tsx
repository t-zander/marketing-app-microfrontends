import React, { ReactElement, useEffect, useRef } from "react";
// @ts-ignore
import { mount as mountMarketingApp } from "marketing/MarketingApp";

interface Props {}

function MarketingApp({}: Props): ReactElement {
  const marketingAppContainerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (marketingAppContainerRef) {
      mountMarketingApp(marketingAppContainerRef.current);
    }
  }, []);

  return <div ref={marketingAppContainerRef} />;
}

export default MarketingApp;
