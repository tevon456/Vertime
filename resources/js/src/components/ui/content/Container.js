import React from "react";
import { device } from "../../../constants/devices";
import styled from "styled-components";

/**
 * Styled container for wrapping contents and components. Renders children
 */
function Container(props) {
    let md = "var(--space-md)";
    let sm = "var(--space-sm)";
    let xs = "var(--space-xs)";

    let background = "var(--primary-color-2)";
    if (props.background === undefined) {
        background = "var(--primary-color-2)";
    } else {
        background = props.background;
    }
    const Containment = styled.div`
        background: ${background};
        box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.12);
        border-radius: var(--radius);
        margin-bottom: var(--space-xl);
        padding: ${md};

        @media ${device.tabletS} {
            padding: ${sm};
        }

        @media ${device.mobileL} {
            padding: ${xs};
        }
    `;
    return (
        <React.Fragment>
            <Containment id={props.id} theme={props.theme}>
                {props.children}
            </Containment>
        </React.Fragment>
    );
}
export default Container;
