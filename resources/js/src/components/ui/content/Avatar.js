import React from "react";
import styled from "styled-components";

/**
 * Avatar image size defaults to small.
 * @prop {string} src: url to avatar image
 * @prop {string} size: size of avatar accepts small, medium, large, huge.
 */
function Avatar(props) {
    let defaultSize = 30;
    let size = defaultSize;
    let initial = "...";
    let colorIndex = 0;
    let colors = [
        "#BF211E",
        "#E57F27",
        "#2A7221",
        "#390099",
        "#9E0059",
        "#1357DD",
        "#4B9E9C",
        "#8FB515",
        "#006992",
        "#ECA400",
        "#FC440F"
    ];
    if (props.first_name === undefined) {
        initial = "...";
    } else {
        initial = props.first_name.split("")[0] + props.last_name.split("")[0];
        let charIndex = initial.charCodeAt(0) - 65;
        colorIndex = charIndex % 11;
    }

    switch (props.size) {
        case "small":
            size = 30;
            break;
        case "medium":
            size = 40;
            break;
        case "large":
            size = 60;
            break;
        case "huge":
            size = 100;
            break;
        default:
            size = defaultSize;
    }

    const StyledAvatar = styled.div`
        overflow: hidden;
        border-radius: 100%;
        background-color: ${colors[colorIndex]};
        margin: 2px;
        width: ${size}px;
        height: ${size}px;
        background-image: url("${props.src}");
        background-size: cover;
        background-repeat: no-repeat;
        background-position-y: center;
        display: -webkit-flex;
        display: flex;
        -webkit-align-items: center;
        align-items: center;
        -webkit-justify-content: space-around;
        justify-content: space-around;
        color: var(--white);
    `;

    const StyledAvatarWrap = styled.div`
        display: inline-block;
        font-size: ${size > 60
            ? `calc(${size}px - 2.2em)}`
            : `calc(${size}px - 100%)`};
        width: ${size}px;
        height: ${size}px;
    `;
    return (
        <React.Fragment>
            <StyledAvatarWrap>
                {props.verified ? (
                    <span
                        title="verified"
                        style={{
                            transform: "translate(244%, -26%)",
                            position: "absolute"
                        }}
                    >
                        <img
                            width={`${size / 3.2}px`}
                            height={`${size / 3.2}px`}
                            src="/images/icons/verified2.svg"
                        />
                    </span>
                ) : null}

                <StyledAvatar src={props.src} alt={props.alt}>
                    {props.src ? (
                        <span style={{ opacity: 0 }}>{initial}</span>
                    ) : (
                        initial
                    )}
                </StyledAvatar>
            </StyledAvatarWrap>
        </React.Fragment>
    );
}

/**
 * Group Avatar images horizontally
 */
function AvatarGroup(props) {
    const AvatarGrouping = styled.div`
        padding-left: 10px;
        margin: 6px 0px;
        display: inline-block;

        & > div {
            margin-left: -10px;
        }
        div > div {
            border: 2px solid var(--primary-color-2);
        }
        div > span {
            margin-left: -10px;
        }
    `;
    return <AvatarGrouping>{props.children}</AvatarGrouping>;
}
/**
 * Used for text alongside an Avatar image eg user's name
 * @prop {number} yAxis: Conrols label height on y-axis
 */
function AvatarLabel(props) {
    const Label = styled.span`
        transform: translateY(${props.yAxis + `px` || `9px`});
        position: absolute;
        padding: 4px;
    `;
    return (
        <React.Fragment>
            <Label>{props.children}</Label>
            <br />
        </React.Fragment>
    );
}
export { Avatar, AvatarGroup, AvatarLabel };
