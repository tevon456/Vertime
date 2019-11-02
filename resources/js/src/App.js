import "react-toastify/dist/ReactToastify.css";

import {
    HOME,
    ID,
    LOGIN,
    OVERVIEW,
    UPDATE
} from "./constants/Routes";
import { Authorization, isUserAuthenticated } from "./helper/authHelper";
import Navigation from "./components/ui/navigation/Navigation";
import React, { Component, Suspense, lazy } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { Slide, ToastContainer } from "react-toastify";
import { get, set } from "idb-keyval";
import ErrorBoundary from "./components/ui/content/Error";
import GuardRoute from "./components/elements/GuardRoute";
import LoginPage from "./components/pages/LoginPage";
import NotFound from "./components/pages/NotFound";
import ProtectedRoute from "./components/elements/ProtectedRoute";
import { getUser } from "./helper/apiHelper";

const Test = lazy(() => import("./components/pages/Test"));
const OverviewRoute = lazy(() => import("./components/elements/OverviewRoute"));

export const AppContext = React.createContext();
class AppProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: []
        };
        this.setState = this.setState.bind(this);
    }
    componentDidMount() {
        this.getAuthenticatedUser();
    }

    getAuthenticatedUser() {
        if (isUserAuthenticated()) {
            //try to get user from cache
            get("user").then(user => {
                //If user not available
                if (user === undefined) {
                    //use getUser api call to retrieve user
                    getUser().then(res => {
                        // set user to state and context
                        this.setState({ user: res.data });
                        //store the user to cache
                        set("user", res.data);
                        Authorization.set();
                    });
                } else {
                    this.setState({ user: user });
                }
            });
        }
    }

    render() {
        return (
            <AppContext.Provider
                //Ensure these values are available app wide via context
                value={{
                    state: this.state,
                }}
            >
                {this.props.children}
            </AppContext.Provider>
        );
    }
}

class App extends Component {
    constructor(props) {
        super(props);
        this.setState = this.setState.bind(this);
    }
    componentDidMount() {
        this.storageEvent();
    }
    //Sync sign in or sign out across browser tabs
    storageEvent() {
        window.addEventListener("storage", function(e) {
            let s = localStorage.getItem("sync");
            if (s == "out" || s == null || s == "in") {
                location.reload();
            }
        });
        window.onstorage = () => {
            Authorization.tamper();
        };
    }

    render() {
        return (
            <ErrorBoundary>
                <AppProvider>
                    <Navigation authenticated={isUserAuthenticated()} />
                    <div style={{ margin: 0 }}>
                        <Suspense
                            fallback={
                                <div className="margin-top--xxxl">
                                    <h4 className="text--center">Loading...</h4>
                                </div>
                            }
                        >
                            <Switch>
                                <ProtectedRoute
                                    path={OVERVIEW}
                                    component={OverviewRoute}
                                />

                                {isUserAuthenticated() ? (
                                    <Route
                                        exact
                                        path={LOGIN}
                                        render={() => (
                                            <Redirect to={OVERVIEW} />
                                        )}
                                    />
                                ) : (
                                    <Route
                                        exact
                                        path={LOGIN}
                                        component={LoginPage}
                                    />
                                )}
                                {isUserAuthenticated() ? (
                                    <Route
                                        exact
                                        path={HOME}
                                        render={() => (
                                            <Redirect to={OVERVIEW} />
                                        )}
                                    />
                                ) : (
                                    <Route exact path={HOME} component={LoginPage} />
                                )}
                                <Route component={NotFound} />
                            </Switch>

                            <ToastContainer
                                position="top-left"
                                transition={Slide}
                                hideProgressBar={true}
                            />
                        </Suspense>
                    </div>
                </AppProvider>
            </ErrorBoundary>
        );
    }
}

export default App;
