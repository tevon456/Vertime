import styled, { keyframes } from "styled-components";

import React from "react";

const CardContainer = styled.div`
    padding: 18px;
    > p {
        font-size: var(--text-sm);
    }
`;

/**
 * Base of card components renders children has card styles
 * @prop {number} width: Width of card.
 * @prop {string} maxWidth: Max-Width of card.
 */
function CardWrapper(props) {
    const Wrapper = styled.div`
        width: ${props.width + `px` || `auto`};
        max-width: ${props.maxWidth || `300px`};
        // box-shadow: 0 1px 4px hsla(0, 0%, 0%, 0.16);
        background: var(--primary-color-2);
        border-color: var(--light-grey);
        border-style: solid;
        border-width: 1px;
        overflow: ${props.overflow || "hidden"};
        margin: 4px;
    `;
    return <Wrapper style={props.style}>{props.children}</Wrapper>;
}

/**
 * Use for contents of cards such as text, links and buttons. Renders children
 */
function CardContent(props) {
    return <CardContainer>{props.children}</CardContainer>;
}

/**
 * Main card component renders children.
 * @prop {string} src: image to be rendered in card if any.
 * @prop {string} imgHeight: height of image in card
 * @prop {string} maxWidth: max-width of card.
 * @prop {string} height: Height of card
 * @prop {number} width: width of card.
 *
 */
function BaseCard(props) {
    const CardImageContainer = styled.div`
        padding: 0px;
        margin: 4px;
        height: ${props.height || `200px`};
        border-radius: 4px;
        overflow: hidden;
        position: relative;
        background-image: url(/images/preload.svg);
        background-size: cover;
        background-repeat: no-repeat;
        background-position-y: center;
        > img {
            width: 100% !important;
            height: ${props.imgHeight || `200px`} !important;
            image-rendering: auto !important;
            object-fit: cover;
        }
    `;
    const Overlay = styled.div`
        background-image: linear-gradient(#00000000, #292929e6);
        transform: translateY(140px);
        width: 100%;
        height: 30%;
        position: absolute;
        border-radius: var(--radius);
    `;
    return (
        <CardWrapper
            overflow={props.overflow}
            width={props.width}
            height={props.height}
            maxWidth={props.maxWidth}
            style={props.style}
        >
            {props.src === undefined ? null : (
                <CardImageContainer>
                    <Overlay />
                    <img src={props.src} />
                </CardImageContainer>
            )}

            <CardContent>{props.children}</CardContent>
        </CardWrapper>
    );
}

export { CardWrapper, CardContent, BaseCard };
