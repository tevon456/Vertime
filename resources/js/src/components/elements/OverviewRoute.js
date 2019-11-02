import { OVERVIEW, PROPERTY, UNIT } from "../../constants/Routes";
import React, { Component, lazy } from "react";
import { Route, Switch } from "react-router-dom";
import { getClients, getUserTimesheets } from "../../helper/apiHelper";

import { AppContext } from "./../../App";
import { Authorization } from "../../helper/authHelper";
import ErrorBoundary from "../ui/content/Error";
import GuardRoute from "./GuardRoute";
import NotFound from "./../pages/NotFound";
import { SubNav } from "./../ui/navigation/SubNavigation";

const Employee = lazy(() => import("./../pages/EmployeeOverview"));

export const OverviewContext = React.createContext();
export class OverviewProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            managerQueue: [],
            userTimesheets: [],
            clients:[],
            isLoading: true
        };
        this.getData = this.getData.bind(this);
    }

    componentDidMount() {
        this.getData();
    }

    getData() {
        {
            Authorization.roleHasPermission(["approve timesheet"])
                ? this.getManagerData()
                : this.getEmployeeData()        
        }
    }

    getManagerData() {
    }

    getEmployeeData(){

        getClients().then(res=>{
           this.setState({
                clients: res.data
            }); 
        })

        getUserTimesheets().then(res=>{
            this.setState({
                userTimesheets:res.data
            })
        })
    }

    render() {
        return (
            <OverviewContext.Provider
                value={{
                    state: this.state,
                    getData: this.getData
                }}
            >
                {this.props.children}
            </OverviewContext.Provider>
        );
    }
}

function LinkMap() {
    let linkmap = {};
    if (Authorization.roleHasPermission(["approve timesheet"])) {
        linkmap = [
            { link: OVERVIEW, name: "Overview", exact: true },
        ];
    } else if(Authorization.roleHasPermission(["create timesheet"])){
        linkmap = [{ link: OVERVIEW, name: "Time log", exact: true }];
    }
    return linkmap;
}

function OverviewRoute() {
    return (
        <ErrorBoundary>
            <AppContext.Consumer>
                {context => (
                    <OverviewProvider>
                        <OverviewContext.Consumer>
                            {overview => (
                                <React.Fragment>
                                    <div className="margin-top--xl" />
                                    <SubNav linkmap={LinkMap()} />
                                    <Switch>
                                        {Authorization.roleHasPermission([
                                            "approve timesheet"
                                        ]) ? (
                                            <ManagerRoutes
                                                refresh={overview.getData}
                                                user={context.state.user}
                                            />
                                        ) : (
                                            <EmployeeRoutes
                                                refresh={overview.getData}
                                                user={context.state.user}
                                            />
                                        )}
                                        <Route exact component={NotFound} />
                                    </Switch>
                                </React.Fragment>
                            )}
                        </OverviewContext.Consumer>
                    </OverviewProvider>
                )}
            </AppContext.Consumer>
        </ErrorBoundary>
    );
}

function ManagerRoutes(props) {
    return (
        <React.Fragment>
            <GuardRoute
                exact
                path={OVERVIEW}
                permission={["approve timesheet"]}
                component={() => (
                    <NotFound />
                )}
            />
        </React.Fragment>
    );
}

function EmployeeRoutes(props) {
    return (
        <React.Fragment>
            <GuardRoute
                path={OVERVIEW}
                permission={["create timesheet"]}
                component={() => (
                    <Employee refresh={props.refresh} user={props.user} />
                )}
            />
        </React.Fragment>
    );
}

export default OverviewRoute;
