import React from "react";
import {Link, withRouter} from "react-router-dom"
import ReactGA  from 'react-ga';
import { ErrorBoundary } from "..";


export default withRouter(({className, section, text, location, children, to}) => {
    const analytics = () => {

        ReactGA.event({
            category: 'ButtonLink',
            action: `Section: ${section}, Button: ${text}, Page: ${location.pathname}`,
          });
         
    }
    return (
        <ErrorBoundary>
        <Link className={className}
        onClick={analytics}
        to={`${to}`}
        >
            {text || children }
        </Link>
        </ErrorBoundary>
    )
}
)
