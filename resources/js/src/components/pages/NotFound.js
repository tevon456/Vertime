import Container from "../ui/content/Container";
import CustomLink from "../ui/navigation/CustomLink";
import { HOME } from "../../constants/Routes";
import Head from "../elements/Head";
import { NOTFOUND } from "./../../constants/copy";
import Page from "../elements/Page";
import React from "react";

function NotFound() {
    return (
        <Page padding={true}>
            <Head title="Page not found" description={NOTFOUND.what_happened} />
            <h1>Page Not Found</h1>
            <Container>
                <p />
                <p>
                    <b>What Happened: </b>
                    {NOTFOUND.what_happened}
                </p>
                <p>
                    <b>Why: </b>
                    {NOTFOUND.why}
                </p>
                <p>
                    <b>What to do: </b> {NOTFOUND.what_to_do}
                    <CustomLink to={HOME}>homepage</CustomLink>
                </p>
            </Container>
        </Page>
    );
}
export default NotFound;
