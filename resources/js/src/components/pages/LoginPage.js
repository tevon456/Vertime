import Head from "../elements/Head";
import { LoginForm } from "./../ui/inputs/Form";
import Page from "../elements/Page";
import React from "react";

function LoginPage() {
    return (
        <Page padding={true}>
            <Head title="Login" />
            <div className="grid-center margin-top--md">
                <LoginForm />
            </div>
        </Page>
    );
}
export default LoginPage;
