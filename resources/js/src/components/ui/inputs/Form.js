import {
    GenericField,
    Label,
    PasswordField,
    handleBlur,
    handleChange,
} from "./Field";
import { Form, Formik } from "formik";
import {
    LOGIN,
} from "../../../constants/Routes";
import {
    LoginSchema,
    LogTimeSchema,
} from "../../../helper/validation";
import {
    createTimesheet,
    updateTimesheet,
    login,
} from "../../../helper/apiHelper";
import { del, get } from "idb-keyval";

import CustomLink from "../navigation/CustomLink";
import { FORMS_COPY } from "../../../constants/copy";
import Note from "../content/Note";
import React from "react";
import { StyledToggleInputWrapper } from "./Field";
import { authenticateUser } from "../../../helper/authHelper";
import { device } from "../../../constants/devices";
import notification from "../../../helper/notificationHelper";
import styled from "styled-components";

export const OverideForm = styled.div`
    & form {
        border: 1px solid transparent;
        padding: 0px;
    }
    & form > button {
        margin-top: 24px;
        margin-bottom: 24px;
    }
`;

const StyledForm = styled(Form)`
    background-color: var(--primary-color-2);
    border: 1px solid #e0e6e8;
    border-radius: var(--radius);
    padding: 20px;
    margin-top: 30px;
    max-width: 500px;
    min-width: 400px;
    > input,
    > select,
    > div > input,
    > div > div > input,
    > textarea,
    > div > textarea,
    > div > div > textarea {
        width: 100%;
        display: block;
        font-size: var(--text-sm);
        padding: 12px 20px;
        margin: 4px 0px 18px 0px;
        box-sizing: border-box;
        border: 2px solid #ccc;
        border-radius: 6px;
        -webkit-transition: 0.5s;
        transition: 0.5s;
        outline: none;
    }
    textarea {
        max-width: 100%;
        min-height: 200px;
    }
    > input:focus,
    > div > input:focus,
    > div > div > input:focus,
    > textarea:focus,
    > div > textarea:focus,
    > div > div > textarea:focus {
        border: 2px solid var(--secondary-color);
    }

    > ::placeholder {
        color: var(--light-grey);
    }

    @media ${device.tablet} {
        min-width: 300px;
    }

    @media ${device.mobileL} {
        min-width: 240px;
        max-width: 300px;
    }
`;

const StyledFormFlex = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between !important;
`;

const StyledFormInline = styled.div`
    display: inline-block !important;
    padding: auto;
`;


export const LoginForm = () => (
    <Formik
        validationSchema={LoginSchema}
        onSubmit={(values, { setSubmitting }) => {
            delete values.show;
            login(values)
                .then(res => {
                    authenticateUser(res.data.access_token);
                    location.reload();
                })
                .catch(function(error) {
                    if (error.response) {
                        notification.danger(error.response.data.message);
                    }
                });
            setTimeout(() => {
                setSubmitting(false);
            }, 7000);
        }}
    >
        {({ errors, touched, values, isSubmitting }) => (
            <StyledForm autoComplete="on">
                <h3>Login</h3>
                <GenericField
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="eg. jean@gmail.com"
                    errors={errors.email}
                    touched={touched.email}
                />
                <PasswordField
                    submit={isSubmitting}
                    values={values}
                    errors={errors}
                    touched={touched}
                />
                <button
                    disabled={isSubmitting}
                    className="btn btn--primary btn--full-width margin-top--md"
                    type="submit"
                >
                    {isSubmitting ? "Loading" : "Login"}
                </button>
            </StyledForm>
        )}
    </Formik>
);

export const LogTimeForm = props => (
    <Formik
        initialValues={
props.update
                    ? {
                        id:props.update.id,
                        task: props.update.task,
                        client_id: props.update.client_id,
                        date: props.update.date,
                        from: props.update.from,
                        to: props.update.to,
                        comment: props.update.comment
                      }
                    : {
                        task: "",
                        client_id: props.data[0].id,
                        date: "",
                        from: "2019-11-01T08:00",
                        to: "2019-11-01T17:00",
                        comment: ""
                      }

    }

        validationSchema={props.update ? null :LogTimeSchema}
        onSubmit={(values, { setSubmitting }) => {
            

                function Create(values) {
                        createTimesheet(values).then(res=>{
                        notification.success(res.message);
                        props.closeModal
                        ?props.closeModal()
                        : null;
                        })
                }

                function Update(values) {
                        updateTimesheet(values).then(() => {
                        notification.success("Timesheet updated");
                        {
                            props.closeModal ? props.closeModal() : null;
                        }
                        });
                }

                props.update ? Update(values) : Create(values);


            setTimeout(() => {
                setSubmitting(false);
                props.closeModal
            }, 2000);
        }}
    >
        {({
            errors,
            touched,
            isSubmitting,
            isValid,
            values,
            handleBlur,
            handleChange
        }) => (
            <StyledForm>
                <Label className="margin-bottom--lg">Select client</Label>
                <select
                    name="client_id"
                    className=" margin-bottom--sm margin-top--sm"
                    value={values.client_id}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    style={{
                        fontWeight: "normal",
                        fontSize: "var(--text-sm)"
                    }}
                >
                    {props.data.map(d => (
                        <option key={d.id} value={d.id}>
                            {d.name}
                        </option>
                    ))}
                </select>

                <GenericField
                    label="Task"
                    name="task"
                    type="text"
                    placeholder="task or assignment"
                    errors={errors.task}
                    touched={touched.task}
                />

                <GenericField
                    label="Comment"
                    name="comment"
                    component="textarea"
                    placeholder="comments"
                    errors={errors.task}
                    touched={touched.task}
                />
                <GenericField
                    label="Date"
                    name="date"
                    type="date"
                    placeholder=""
                    errors={errors.date}
                    touched={touched.date}
                />
                <GenericField
                    label="From"
                    name="from"
                    type="datetime-local"
                    placeholder=""
                    errors={errors.from}
                    touched={touched.from}
                />
                <GenericField
                    label="To"
                    name="to"
                    type="datetime-local"
                    placeholder="e"
                    errors={errors.to}
                    touched={touched.to}
                />
                <button
                    disabled={isSubmitting || !isValid}
                    className="btn btn--primary btn--full-width margin-top--md"
                    type="submit"
                >
                    {isSubmitting ? "Loading" : "Submit for approval"}
                </button>
            </StyledForm>
        )}
    </Formik>
);

