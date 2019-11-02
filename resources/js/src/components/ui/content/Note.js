import React from "react";
import styled from "styled-components";

/**
 * Give user further contextual information that should grab attention
 * @prop {string} type: info, warning, danger.
 */
export function Note(props) {
    let back = "";
    let color = "";
    let border = "";

    if (props.type === "warning") {
        back = "#fbe9b9";
        color = "rgb(167, 125, 6)";
    } else if (props.type === "danger") {
        back = "#fde3e3";
        color = "#e22c2c";
    } else {
        back = "#dfedf9";
        color = "hsl(196, 81%, 34%)";
    }

    const StyledNote = styled.div`
        background: ${back};
        color: ${color};
        padding: 10px 20px;
        width: auto;
        max-width: 400px;
        border-radius: var(--radius);
        border-left: 4px solid ${color};
    `;
    return <StyledNote className="margin-top--md">{props.children}</StyledNote>;
}

export default Note;
