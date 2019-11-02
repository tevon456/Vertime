import React from "react";
import styled from "styled-components";

class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: this.props.on ? true : false
        };
        this.mainCall = this.mainCall.bind(this);
    }

    toggle() {
        this.setState(() => ({
            checked: !this.state.checked
        }));
    }

    noFunction() {
        console.log("No function passed to this toggle for execution");
    }

    mainCall() {
        if (this.props.switchOn && this.state.checked == false) {
            this.props.switchOn();
        } else if (this.props.switchOff && this.state.checked == true) {
            this.props.switchOff();
        } else {
            this.noFunction;
        }
    }

    render() {
        return (
            <StyledToggle color={this.props.color}>
                <input
                    type="checkbox"
                    onClick={this.toggle.bind(this)}
                    onChange={this.mainCall}
                    checked={this.state.checked}
                />
                <span className="slider round" />
            </StyledToggle>
        );
    }
}
const StyledToggle = styled.label`
    position: relative;
    display: block;
    line-height: 2;
    width: 60px;
    height: 30px;
    margin: var(--space-xxs);
    margin-left: 0px;

    input {
        opacity: 0;
        width: 0;
    }

    .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        -webkit-transition: 0.4s;
        transition: 0.4s;
    }

    .slider:before {
        position: absolute;
        box-shadow: 0px 2px 4px rgba(60, 60, 60, 0.73),
            0px 2px 4px rgba(71, 63, 79, 0.08);
        content: "";
        height: 22px;
        width: 22px;
        left: 6px;
        bottom: 4px;
        background-color: var(--white);
        background-image: linear-gradient(#fff, #fff);
        -webkit-transition: 0.5s;
        transition: 0.5s;
        transition-timing-function: cubic-bezier(0.27, 0.88, 0.27, 0.88);
    }

    & input:checked + .slider {
        background-color: var(--accent-color-light);
        ${({ color }) =>
            color &&
            `
    background: ${color || "var(--accent-color-light)"};
  `}
    }

    & input:not(:checked) + .slider {
        background-color: #909090;
    }

    & input:checked + .slider:before {
        -webkit-transform: translateX(26px);
        -ms-transform: translateX(26px);
        transform: translateX(26px);
    }

    .slider.round {
        border-radius: 50px;
    }

    .slider.round:before {
        border-radius: 50px;
    }
`;
export default Toggle;
