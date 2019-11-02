import { Redirect, Route } from "react-router-dom";

import { HOME } from "../../constants/Routes";
import React from "react";
import { isUserAuthenticated } from "../../helper/authHelper";
import notification from "./../../helper/notificationHelper";

/**
 * Redirects to login if user is unauthenticated
 * @prop Same as React Router Route.
 */
const ProtectedRoute = ({ component: Comp, path, ...rest }) => {
    return (
        <Route
            exact
            path={path}
            {...rest}
            render={props => {
                return isUserAuthenticated() ? (
                    <Comp {...props} />
                ) : (
                    <React.Fragment>
                        {notification.warning("Login to your account first")}
                        <Redirect to={HOME} />
                    </React.Fragment>
                );
            }}
        />
    );
};

export default ProtectedRoute;
