import { Redirect, Route } from "react-router-dom";

import React from "react";
import { isUserAuthenticated } from "../../helper/authHelper";

/**
 * Prevents Authenticated users from accessing a page
 * @prop {string} from: Default route to take.
 * @prop {string} to: Route to take if user is authenticated
 * @prop {string} component: Default component to render.
 */
const AuthRedirectRoute = ({ component: Comp, to, from, ...rest }) => {
    return (
        <Route
            exact
            path={from}
            {...rest}
            render={props => {
                return isUserAuthenticated() ? (
                    <Redirect to={to} />
                ) : (
                    <Comp {...props} />
                );
            }}
        />
    );
};

export default AuthRedirectRoute;
