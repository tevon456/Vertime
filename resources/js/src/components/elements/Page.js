import NotFound from "../pages/NotFound";
import React from "react";
import { device } from "../../constants/devices";
import styled from "styled-components";

export function Background(props) {
    const BackgroundImg = styled.div`
        background: url(${props.src});
        height: ${props.height || `100%`};
        width: 100%;
        background-repeat: ${props.repeat};
        background-size: ${props.cover || `initial`};
        background-color: ${props.color || `var(--accent-color)`};
    `;
    return <BackgroundImg>{props.children}</BackgroundImg>;
}

/**
 * Used as parent for Page Components.
 * @prop {string} pageTitle: Used to set title of page
 * @prop {boolean} padding: Enable or disable responsive padding
 */
function Page(props) {
    let xxxl = "var(--space-xxxl)";
    let xxl = "var(--space-xxl)";
    let xl = "var(--space-xl)";
    let md = "var(--space-md)";
    let sm = "var(--space-sm)";

    if (props.padding === false) {
        sm = "var(--space-xs)";
        md = "var(--space-xs)";
        xl = "var(--space-xs)";
        xxl = "var(--space-xs)";
        xxxl = "var(--space-xs)";
    }

    const Content = styled.div`
        padding-bottom: var(--space-md);

        @media ${device.desktopL} {
            padding-top: var(--space-xxl);
            padding-bottom: var(--space-xxl);
            padding-left: ${xxxl};
            padding-right: ${xxxl};
        }

        @media ${device.desktop} {
            padding-top: var(--space-xxl);
            padding-bottom: var(--space-xxl);
            padding-left: calc(${xxl});
            padding-right: calc(${xxl});
        }

        @media ${device.laptop} {
            padding-top: var(--space-xxl);
            padding-bottom: var(--space-xxl);
            padding-left: ${xl};
            padding-right: ${xl};
        }

        @media ${device.tablet} {
            padding-top: var(--space-xl);
            padding-bottom: var(--space-xl);
            padding-left: ${md};
            padding-right: ${md};
        }

        @media ${device.mobileL} {
            padding-top: var(--space-xl);
            padding-bottom: var(--space-xl);
            padding-left: ${sm};
            padding-right: ${sm};
        }
    `;
    return (
        <React.Fragment>
            {props.status === 404 ? (
                <NotFound />
            ) : (
                <Content>{props.children}</Content>
            )}
        </React.Fragment>
    );
}
export default Page;
