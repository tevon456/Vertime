import Blur from "./Blur";
import React from "react";

/**
 * Used as the header for modals
 *
 * @param {function} closeModal - This should be the function that closes the modal
 * @param {string} modalTitle - Title displayed at  the top of a modal
 * @param {boolean} blur - blur the background of the modal, default true
 *
 * @example
 *     <ModalHeader
 *      modalTitle={`I'm a modal`}
 *      closeModal={this.closeModal}
 *      blur={false}
 *     />
 *
 */
export function ModalHeader(props) {
    return (
        <React.Fragment>
            {props.blur === false ? null : <Blur />}
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    position: "sticky",
                    top: "0px",
                    position: "sticky",
                    background: "var(--primary-color-2)",
                    borderBottom: "1px solid var(--light-grey)",
                    padding: "8px",
                    zIndex: 1,
                    marginTop: "0px"
                }}
            >
                <span
                    className="text--rg text--bold"
                    style={{
                        display: "inline-flex",
                        lineHeight: 2
                    }}
                >
                    {props.modalTitle}
                </span>
                <button
                    className="btn btn--bordered btn--sm"
                    onClick={props.closeModal}
                >
                    Close
                </button>
            </div>
        </React.Fragment>
    );
}
