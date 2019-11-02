import React, { useRef } from "react";

import styled from "styled-components";

const DropDownInput = styled.input`
    width: 0px;
    height: 0px;
    display:none
    position: absolute;

    & + .dd-menu {
        display: none;
        z-index: 4;
    }
    &:checked + .dd-menu {
        display: block;
    }
`;
/** Pass an id from the element requesting the dropdown to open */
function openDropDown(el) {
    if (event.keyCode == 13) {
        console.log("step 1");
        let me = document.getElementById(el);
        console.log(me);
        let menu = me.previousSibling;
        console.log(menu);
        let target = menu.previousSibling;
        console.log(target);
        if (target.checked) {
            target.checked = false;
        } else {
            target.checked = true;
            menu.firstChild.focus();
        }
    }
}

/**
 * A dropdown menu component
 *
 * @param {boolean} hoverToOpen - Allows mouse over to open dropdown
 * @param {boolean} open - Whether the dropdown is open on render, defaults to false
 *
 * @example
 *
 *      <DropDown hoverToOpen={true} open={false}>
 *          <DropDownMenu
 *              x="0px"
 *              y="27px"
 *              width="170px"
 *              tabIndex="1"
 *          >
 *            <li tabIndex="0">
 *                  Hello
 *            </li>
 *            <li tabIndex="0" >
 *                  Foo
 *            </li>
 *          </DropDownMenu>
 *          <button
 *          id="open"
 *          onKeyDown={() => openDropDown("open") }
 *          >
 *          Open
 *          </button>
 *      </DropDown>
 *
 *
 */
function DropDown(props) {
    const inputEl = useRef(null);
    const open = () => {
        inputEl.current.checked = true;
        console.log("open");
    };
    return (
        <label onMouseEnter={props.hoverToOpen ? open : null}>
            <DropDownInput
                ref={inputEl}
                defaultChecked={props.open || false}
                type="checkbox"
                className="dd-input"
                tabIndex="-1"
            />
            {props.children}
        </label>
    );
}

/**
 * Must be the first child of DropDown, use li for menu entries
 *
 * @param {string} width - Width of the menu
 * @param {string} x - Menu position on the x-axis in relation to DropDown
 * @param {string} y - Menu position on the y-axis in relation to DropDown
 *
 * @example
 *
 *          <DropDownMenu
 *           x="10px"
 *           y="20px"
 *           width="170px">
 *             <li tabIndex="0">Bar</li>
 *             <li tabIndex="0" >Foo</li>
 *          </DropDownMenu>
 *
 */
function DropDownMenu(props) {
    const StyledDropDownMenu = styled.ul`
        min-width: 160px;
        position: absolute;
        width: ${props.width || "128px"};
        overflow: hidden;
        border-radius: var(--radius);
        border: 1px solid var(--light-grey);
        padding: 6px;
        box-shadow: 0px 2px 18px 0px rgba(0, 0, 0, 0.12);
        background-color: var(--primary-color-2, #fff);
        list-style-type: none;
        transform: translate(${props.x || "0px"}, ${props.y || "0px"});
        > li,
        li > a {
            display: flex;
            border-radius: 4px;
            cursor: pointer;
            padding: 6px 4px;
            color: var(--secondary-color, #111);
            white-space: nowrap;
            text-decoration: none;
            color: var(--secondary-color);
        }
        & li > a {
            padding: 2px !important;
            display: block;
            width: 100%;
        }
        & li:hover {
            background: var(--primary-color);
        }
    `;
    return (
        <StyledDropDownMenu className="dd-menu">
            {props.children}
        </StyledDropDownMenu>
    );
}

export { DropDown, DropDownMenu, openDropDown };
