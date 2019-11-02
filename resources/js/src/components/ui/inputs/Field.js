// Import FilePond styles

import "filepond/dist/filepond.min.css";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

import { FilePond, registerPlugin } from "react-filepond";
import { IconEye, IconEyeOff } from "../content/Icon";

import { Field } from "formik";
import FilePondPluginFileValidateSize from "filepond-plugin-file-validate-size";
import FilePondPluginImageCrop from "filepond-plugin-image-crop";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import FilePondPluginImageResize from "filepond-plugin-image-resize";
import FilePondPluginImageTransform from "filepond-plugin-image-transform";
import MaskedInput from "react-text-mask";
import React from "react";
import createNumberMask from "text-mask-addons/dist/createNumberMask";
import styled from "styled-components";

registerPlugin(
    FilePondPluginImageExifOrientation,
    FilePondPluginImagePreview,
    FilePondPluginFileValidateSize,
    FilePondPluginImageCrop,
    FilePondPluginImageResize,
    FilePondPluginImageTransform
);
export const Label = styled.label`
    font-weight: bold;
    // display: block;
    font-size: var(--text-sm);
`;

const FormError = styled.label`
    font-size: var(--text-sm);
    color: var(--red);
`;

export const StyledToggleInputWrapper = styled.div`
    display: flex;
    justify-content: start;
    & label:last-of-type .checkmark {
        border-radius: 0px 4px 4px 0px !important;
        border: 2px solid var(--light-grey);
    }
    & label:first-of-type .checkmark {
        border-radius: 4px 0px 0px 4px; !important;
        border: 2px solid var(--light-grey);
    }
`;
const StyledToggleInput = styled.label`
    display: inline-block;
    position: relative;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: auto;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    /* Hide the browser's default radio button */
    > input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
    }
    > input::after {
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
    }

    .checkmark {
        position: relative;
        display: block;
        top: 0;
        left: 0;
        font-size: var(--text-sm);
        border: 2px solid var(--light-grey);
        padding: 10px 20px;
        width: auto;
        background-color: transparent;
        color: var(--grey);
        border-radius: 0px;
        // border-right: none;
    }

    & > input:checked ~ .checkmark {
        background-color: var(--accent-color-light);
        border: 2px solid var(--accent-color-light);
        color: white;
        min-width: 60px;
    }

    & > input:not(:checked) ~ .checkmark {
        background-color: transparent;
        color: var(--secondary-color);
        min-width: 60px;
    }
`;

const StyledProfileUpload = styled(FilePond)`
    &[data-style-panel-layout="compact circle"] {
        width: 130px;
        margin: 0px auto;
    }

    .filepond--drop-label {
        color: #4c4e53;
        cursor: pointer;
    }

    .filepond--label-action {
        text-decoration-color: #babdc0;
    }

    .filepond--panel-root {
        background-color: #edf0f4;
    }

    .filepond--root {
        width: 70px;
        margin: 0 auto;
    }
`;

export function ToggleInput(props) {
    return (
        <StyledToggleInput tabIndex="0">
            <input
                id={props.id}
                type={props.type}
                name={props.name}
                value={props.value}
                checked={props.checked}
                onChange={props.onChange}
            />
            <span className={`checkmark`}>{props.label}</span>
        </StyledToggleInput>
    );
}

export function GenericField(props) {
    return (
        <React.Fragment>
            <Label>{props.label}</Label>
            {props.errors && props.touched ? (
                <FormError> {props.errors}</FormError>
            ) : null}
            <Field
                style={{ maxWidth: props.maxWidth }}
                name={props.name}
                type={props.type}
                min={props.min}
                readOnly={props.readOnly}
                max={props.max}
                placeholder={props.placeholder}
                component={props.component}
            />
        </React.Fragment>
    );
}

const numberMask = createNumberMask({
    prefix: "",
    suffix: "",
    allowDecimal: true
});

export const CurrencyInput = ({ field, ...props }) => (
    <div>
        <MaskedInput mask={numberMask} guide={false} {...field} {...props} />
    </div>
);

export function PasswordField(props) {
    return (
        <React.Fragment>
            <Label>Password</Label>
            {props.errors.password && props.touched.password ? (
                <FormError> {props.errors.password}</FormError>
            ) : null}
            <Field
                style={{ paddingLeft: "52px" }}
                name="password"
                placeholder="Must be at least 8 characters"
                type={props.values.show && !props.submit ? "text" : "password"}
            />
            <Label
                title={props.values.show && !props.submit ? "Hide" : "Show"}
                style={{
                    padding: "8px 12px",
                    position: "absolute",
                    transform: "translate(0px,-60px)",
                    borderRight: "2px solid #ccc",
                    fontSize: "20px",
                    transition: "0.5s"
                }}
            >
                {props.values.show && !props.submit ? (
                    <IconEye />
                ) : (
                    <IconEyeOff />
                )}
                <Field
                    style={{
                        display: "none"
                    }}
                    name="show"
                    type="checkbox"
                />
            </Label>
        </React.Fragment>
    );
}

export function unMaskCurrency(value) {
    if (typeof value != "number") {
        value = parseFloat(value.replace(/,/g, ""));
    }
    return value;
}

export function unMaskPhone(value) {
    if (typeof value != "number") {
        value = value.replace("+", "");
        value = value.replace("-", "");
        value = value.replace(/[{()}]/g, "");
        value = value.replace(" ", "");
        value = value.replace(" ", "");
    }
    return value;
}
