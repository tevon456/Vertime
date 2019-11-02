import React from "react";
import { device } from "../../constants/devices";
import styled from "styled-components";

const FlexViewItem = styled.div`
    flex: 0 0 auto;
    margin: 8px;
    margin-bottom: 28px;
`;

const FlexRowWrap = styled.div`
    &::-webkit-scrollbar {
        width: 12px;
        height: 12px;
    }

    &::-webkit-scrollbar-track {
        background: var(--light-grey);
        border-radius: 8px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #3f3f3f;
        border-radius: 8px;
    }
    &::-webkit-scrollbar-thumb:hover {
        background-color: #3f3f3f;
        border-radius: 8px;
    }
`;

const FlexRowContainer = styled.div`
    min-height: auto;
    height: auto;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: baseline;
    display: flex;
    flex-direction: row;
    align-content: flex-start;
    & div > img {
        image-rendering: pixelated;
        width: auto;
        border-radius: var(--radius);
    }

    @media ${device.desktopL} {
        & div > img {
            height: 400px;
        }
    }

    @media ${device.mobileL} {
        & div > img {
            height: 300px;
        }
    }

    @media ${device.mobileS} {
        & div > img {
            height: 240px;
        }
    }
`;

/**
 * Creates a flex view grid layout , used as a warpper component.
 *
 */
function FlexView(props) {
    const FlexContainer = styled.div`
        min-height: 400px;
        display: flex;
        display: -webkit-flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: ${props.justify || "center"};
        align-items: auto;
        align-content: flex-start;
        // &:after {
        //     display: block;
        //     content: "";
        //     flex: 999 999 auto;
        // }
    `;
    return <FlexContainer>{props.children}</FlexContainer>;
}

/**
 * Creates a flex row horizontal layout , used as a warpper component.
 *
 */
function FlexRow(props) {
    return (
        <FlexRowWrap
            style={{
                overflowX: "auto",
                overflowY: "hidden",
                width: "100%"
            }}
            tabIndex="0"
        >
            <FlexRowContainer>{props.children}</FlexRowContainer>
        </FlexRowWrap>
    );
}

/**
 * Used to wrap individual items of FlexRow and FlexView, must be the child of either when used.
 *
 */
function FlexItem(props) {
    return <FlexViewItem>{props.children}</FlexViewItem>;
}

export { FlexView, FlexItem, FlexRow };
