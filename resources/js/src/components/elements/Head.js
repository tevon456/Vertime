import { Helmet } from "react-helmet";
import React from "react";

function Head(props) {
    let title = "Vertime - Simple rental listing";
    let link = "https://vertime.co";
    let keyWords = "Time tracking, Vertime ";
    let description = "small timesheet application";
    let image = "";

    return (
        <Helmet>
            <title>{props.title}</title>
            <meta name="title" content={props.title || title} />
            <meta
                name="description"
                content={props.description || description}
            />
            <meta name="keywords" content={props.keyWords || keyWords} />

            {/* <!-- Open Graph / Facebook --> */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={location.href || link} />
            <meta property="og:title" content={props.title || title} />
            <meta
                property="og:description"
                content={props.description || description}
            />
            <meta property="og:image" content={props.image || image} />

            {/* <!-- Twitter --> */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={location.href || link} />
            <meta property="twitter:title" content={props.title || title} />
            <meta
                property="twitter:description"
                content={props.description || description}
            />
            <meta
                property="twitter:image"
                content={props.image || image}
            ></meta>
        </Helmet>
    );
}

export default Head;
