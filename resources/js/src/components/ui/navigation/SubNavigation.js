import { NavLink } from "react-router-dom";
import React from "react";
import styled from "styled-components";

export function SubNav(props) {
    const StyledSubNav = styled.div`
        border-bottom: 1px solid var(--light-grey);
        margin-bottom: -3em;
        display: flex;
        justify-content: center;

        > a {
            padding: 6px 10px;
            text-decoration: none;
            color: var(--secondary-color);
        }

        > a:hover {
            color: var(--grey);
        }

        .sub {
            border-bottom: 4px solid var(--accent-color-light);
        }
        .sub:hover {
            color: var(--secondary-color);
        }
    `;
    return (
        <StyledSubNav className="margin-top--sm margin-bottom--lg">
            {props.linkmap.map(link => (
                <NavLink
                    key={link.link}
                    tabIndex="0"
                    activeClassName="sub"
                    exact={link.exact}
                    to={link.link}
                >
                    {link.name}
                </NavLink>
            ))}
        </StyledSubNav>
    );
}
