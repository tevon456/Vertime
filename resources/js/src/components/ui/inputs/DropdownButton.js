import { DropDown, DropDownMenu, openDropDown } from "../surfaces/Dropdown";

import { IconChevronDown } from "../content/Icon";
import React from "react";
import styled from "styled-components";

const StyledDropdownButton = styled.div`
    display: flex;

    > button {
        border-radius: var(--radius) 0px 0px var(--radius);
    }
    .drop-section {
        border-radius: 0px var(--radius) var(--radius) 0px;
        max-width: 30%;
    }
    .seperation {
        border-left: 1px solid transparent;
        display: inline;
    }
`;

function DropdownButton(props) {
    return (
        <StyledDropdownButton>
            <button
                onClick={() => props.onClick()}
                style={{
                    background: props.background,
                    color: props.color || "var(--primary-color-2)",
                    cursor: "pointer"
                }}
                className={props.className}
            >
                {props.text}
            </button>
            <div className="seperation" />
            <Drop
                className={props.className}
                background={props.background}
                x={props.x}
                color={props.color}
                y={props.y}
                width={props.width}
            >
                {props.children}
            </Drop>
        </StyledDropdownButton>
    );
}

function Drop(props) {
    return (
        <DropDown>
            <DropDownMenu
                x={props.x}
                y={props.y}
                width={props.width}
                tabIndex="0"
            >
                {props.children}
            </DropDownMenu>
            <div
                style={{
                    cursor: "pointer",
                    background: props.background,
                    color: props.color || "var(--primary-color-2)"
                }}
                id={props.id}
                onKeyDown={() => openDropDown(props.id)}
                tabIndex="0"
                className={props.className + " drop-section"}
            >
                <IconChevronDown strokeWidth={4} />
            </div>
        </DropDown>
    );
}

export default DropdownButton;
