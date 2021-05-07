import React, { Dispatch, ReactElement, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
// @ts-ignore
import { mount as mountAuthApp } from 'auth/AuthApp';

interface Props {
  setIsSignedIn: Dispatch<boolean>;
}

function AuthMFE({ setIsSignedIn }: Props): ReactElement {
  const authAppContainerRef = useRef<HTMLDivElement>(null);
  const history = useHistory();

  useEffect(() => {
    if (authAppContainerRef) {
      // mount marketing app to container app
      const { onParentNavigate } = mountAuthApp(authAppContainerRef.current, {
        onNavigate: ({ pathname: nextPathName }: Location) => {
          const { pathname: currentPathName } = history.location;
          if (currentPathName !== nextPathName) {
            history.push(nextPathName);
          }
        },
        initialPath: history.location.pathname,
        onSignIn: () => {
          setIsSignedIn(true);
        }
      });
      history.listen(onParentNavigate);
    }
  }, []);

  return <div ref={authAppContainerRef} />;
}

export default AuthMFE;
