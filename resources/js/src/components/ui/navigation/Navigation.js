import {
    HOME,
    LOGIN,
    OVERVIEW,
} from "../../../constants/Routes";
import { DropDown, DropDownMenu } from "../surfaces/Dropdown";
import { IconBookmark, IconCompass, IconHome } from "../content/Icon";
import { Link, NavLink } from "react-router-dom";
import {
    deauthenticateUser,
    isUserAuthenticated
} from "../../../helper/authHelper";

import { AppContext } from "../../../App";
import { Avatar } from "../content/Avatar";
import { IconLogIn } from "./../content/Icon";
import React from "react";
import { device } from "../../../constants/devices";
import styled from "styled-components";

function logUserOut() {
    deauthenticateUser();
    setTimeout(() => {
        location.reload();
    }, 2000);
}

const Nav = styled.ul`
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    top: 0px;
    z-index: 8;
    list-style-type: none;
    margin: 0;
    position: fixed;
    width: 100%;
    padding: 4px;
    background-color: var(--primary-color-2);
    border-bottom: 1px solid var(--light-grey);
    box-shadow: var(--primary-color) 0 -15px, rgba(0, 0, 0, 0.1) 0 0 15px;
`;

const NavItem = styled(NavLink)`
    float:right
    display: inline-flex;
    color: var(--grey);
    font-size: var(--text-rg);
    padding: 14px 16px;
    text-decoration: none;
    &:hover {
        color: var(--secondary-color);
    }

    @media ${device.tabletS} {
        display: none;
    }
`;

const NavItemLogo = styled(Link)`
    float: left;
    padding: 2px 20px;
    transform: translateY(4px);
`;

const NavAvatar = styled.span`
    float:right
    display: inline-flex;
    color: #6b6b6b;
    font-size: var(--text-rg);
    padding: 14px 16px;
    text-decoration: none;
    display: grid;
    justify-content: center;
    align-items: center;
    padding: 3px;

    @media ${device.tabletS} {
        display: initial;
    }
`;

const NavButton = styled.button`
    color: #fff;
    font-size: var(--text-rg);
    background: ${props => props.background || "var(--accent-color)"};
    border: transparent;
    border-radius: 5px;
    padding: 8px 16px;
    margin: -6px;
    &:hover {
        background: ${props => props.hover || `var(--accent-color-lighter)`};
    }

    @media ${device.tabletS} {
        display: initial;
    }
`;

/**
 * Main app navigation bar
 */
function Navigation(props) {
    return (
        <AppContext.Consumer>
            {context => (
                <nav>
                    <Nav>
                        <NavItemLogo title="Vertime" to={HOME} tabIndex="1">
                            <img
                                width="70"
                                hieght="150"
                                src={`${location.origin}/images/logo.svg`}
                            />
                        </NavItemLogo>
                        {props.authenticated ? (
                            <SignedInLinks
                                first_name={context.state.user.first_name}
                                last_name={context.state.user.last_name}
                                avatar={context.state.user.avatar}
                            />
                        ) : (
                            <SignedOutLinks />
                        )}
                    </Nav>
                </nav>
            )}
        </AppContext.Consumer>
    );
}

function SignedInLinks(props) {
    return (
        <React.Fragment>
            <NavAvatar
                style={{ cursor: "pointer" }}
                to={HOME}
                style={{ marginRight: "20px" }}
                tabIndex="5"
            >
                <DropDown hoverToOpen={false}>
                    <DropDownMenu x="-120px" y="54px" width="150px">
                        <DropDownItem
                            name={props.first_name + " " + props.last_name}
                        />
                    </DropDownMenu>
                    <Avatar
                        first_name={props.first_name}
                        last_name={props.last_name}
                        size="medium"
                        src={props.avatar}
                    />
                </DropDown>
            </NavAvatar>
            <NavItem to={OVERVIEW} activeClassName="active" tabIndex="2">
                Dashboard
            </NavItem>
        </React.Fragment>
    );
}

function SignedOutLinks() {
    return (
        <React.Fragment>
            <NavItem
                style={{ display: "inline-flex" }}
                activeClassName="active"
                to={LOGIN}
                tabIndex="3"
                exact
            >
                Login
            </NavItem>
        </React.Fragment>
    );
}

function DropDownItem(props) {
    return (
        <React.Fragment>
            <li
                style={{ cursor: "initial" }}
                className=" margin-bottom--xs margin-top--xs "
            >
                <b>{props.name}</b>
            </li>
            <hr />
            <li>
                <button
                    onClick={() => logUserOut()}
                    className="btn btn--secondary btn--full-width btn--sm "
                    id="logout"
                >
                    Logout
                </button>
            </li>
        </React.Fragment>
    );
}
export default Navigation;
