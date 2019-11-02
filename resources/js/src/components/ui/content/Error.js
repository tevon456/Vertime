import * as Sentry from "@sentry/browser";

import Container from "./Container";
import Page from "../../elements/Page";
import React from "react";

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, eventId: null };
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        Sentry.withScope(scope => {
            scope.setExtras(errorInfo);
            const eventId = Sentry.captureException(error);
            this.setState({ eventId });
        });
    }

    render() {
        if (this.state.hasError) {
            return (
                <Page padding={true}>
                    <h1>Error</h1>
                    <Container>
                        <p>Something went wrong when trying that activity</p>
                        <button
                            className="btn btn--primary btn--md"
                            onClick={() =>
                                Sentry.showReportDialog({
                                    eventId: this.state.eventId
                                })
                            }
                        >
                            Report feedback
                        </button>
                    </Container>
                </Page>
            );
        }

        return this.props.children;
    }
}
export default ErrorBoundary;
