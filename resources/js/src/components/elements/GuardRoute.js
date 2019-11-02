import { Redirect, Route } from "react-router-dom";

import { Authorization } from "../../helper/authHelper";
import ProtectedRoute from "./ProtectedRoute";
import React from "react";

/**
 * Redirects to login if user is unauthenticated
 * @prop Same as React Router Route.
 */
const GuardRoute = ({ component: Comp, path, permission, ...rest }) => {
    return (
        <ProtectedRoute
            exact
            path={path}
            {...rest}
            component={props => {
                return Authorization.roleHasPermission(permission) ? (
                    <Comp {...props} />
                ) : (
                    <React.Fragment>
                        <Redirect to="/*/" />
                    </React.Fragment>
                );
            }}
        />
    );
};

export default GuardRoute;
