import * as serviceWorker from "./serviceWorker";

import { BrowserRouter, Route } from "react-router-dom";

import App from "./App";
import React from "react";
import { render } from "react-dom";

const Root = () => (
    <BrowserRouter>
        <Route component={App} />
    </BrowserRouter>
);

if (document.getElementById("root")) {
    render(<Root />, document.getElementById("root"));
}
serviceWorker.unregister();
