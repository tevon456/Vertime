import React from "react";
import styled from "styled-components";

/**
 * Text badge that renders children
 */
function Badge(props) {
    const BadgeStyle = styled.span`
        color: var(--primary-color-2);
        background: ${props.background || "var(--secondary-color)"};
        border-radius: var(--radius);
        padding: 2px 8px;
        margin: 2px;
        cursor: default;
        display: inline-block;
    `;
    return <BadgeStyle>{props.children}</BadgeStyle>;
}

export default Badge;
