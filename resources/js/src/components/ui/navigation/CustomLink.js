import { IconArrowRightUp } from "../content/Icon";
import { Link } from "react-router-dom";
import React from "react";
import styled from "styled-components";

const StyledLink = styled(Link)`
    color: var(--accent-color-lighter);
    text-decoration: none;
    border-bottom: 1px solid var(--secondary-color);
    transition: color border 0.125s ease-in;
    &:hover {
        color: var(--accent-color-lighter);
        border-bottom: 1px solid var(--accent-color-lighter);
    }
    &:focus {
        color: var(--accent-color-lighter);
        border-bottom: 1px solid var(--accent-color-lighter);
    }
`;

/**
 * A styled version of a regular link
 *
 * @param {string} to - The path the link will navigate to
 *
 * @example
 *    <CustomLink to={`/login`}>Login</CustomLink>
 *
 *
 */
function CustomLink(props) {
    return (
        <React.Fragment>
            <StyledLink tabIndex="0" to={props.to}>
                {props.children}
            </StyledLink>
        </React.Fragment>
    );
}

/**
 * A styled link used only for external websites
 *
 * @param {string} to - The path the link will navigate to
 * @param {string} color - The text color of the link
 * @param {string} hover - The on hover color of the link
 *
 * @example
 *    <ExternalLink
 *     color="#ffffff"
 *     hover="#4285F4"
 *     to="https://www.google.com"
 *     >
 *      Google
 *    </ExternalLink>
 *
 *
 */
export function ExternalLink(props) {
    const StyledExternalLink = styled.a`
        color: ${props.color || "var(--accent-color-lighter)"};
        text-decoration: none;
        border-bottom: 1px solid var(--secondary-color);
        transition: color border 0.125s ease-in;
        &:hover {
            color: ${props.hover || "var(--accent-color-lighter)"};
            border-bottom: 1px solid
                ${props.hover || "var(--accent-color-lighter)"};
        }
        &:focus {
            color: ${props.hover || "var(--accent-color-lighter)"};
            border-bottom: 1px solid
                ${props.hover || "var(--accent-color-lighter)"};
        }
    `;
    return (
        <React.Fragment>
            <StyledExternalLink
                tabIndex="0"
                href={props.to}
                rel="noopener noreferrer"
                target="_blank"
            >
                {props.children} <IconArrowRightUp />
            </StyledExternalLink>
        </React.Fragment>
    );
}

export default CustomLink;
