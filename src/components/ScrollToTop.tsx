import React, { useEffect, Fragment } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';

interface ScrollToTopPropsType extends RouteComponentProps<any> {
  history: any;
  children: React.ReactNode;
}

function ScrollToTop({ history, children }: ScrollToTopPropsType) {
  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unlisten();
    }
  }, []);

  return <Fragment>{children}</Fragment>;
}

export default withRouter(ScrollToTop);