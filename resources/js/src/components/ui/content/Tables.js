import "react-table/react-table.css";

import { FlexItem, FlexRow } from "../../elements/FlexView";
import { IconMoreVertical, IconX } from "../content/Icon";
import React, { Component } from "react";

import { ExternalLink } from "../navigation/CustomLink";
import Modal from "react-modal";
import { ModalHeader } from "../surfaces/Modal";
import { PropertyForm } from "../inputs/Form";
import ReactTable from "react-table";
import Space from "../content/WhiteSpace";
import { deleteProperty } from "../../../helper/apiHelper";
import notification from "../../../helper/notificationHelper";
import styled from "styled-components";

const StyledTable = styled(ReactTable)`
    border: 1px solid var(--light-grey) !important;
    background: var(--primary-color) !important;

    .-sort-desc {
        box-shadow: none !important;
        &:before {
            content: "▼";
            float: right;
        }
    }

    .-sort-asc {
        box-shadow: none !important;
        &:before {
            content: "▲";
            float: right;
        }
    }

    .ReactTable.-highlight .rt-tbody .rt-tr:not(.-padRow):hover {
        background: #3498db57 !important;
    }
`;

const columns = [
    {
        expander: true,
        Header: () => <strong>More</strong>,
        width: 65,
        Expander: ({ isExpanded, ...rest }) => (
            <div title="click">
                {isExpanded ? (
                    <IconX title="collapse" />
                ) : (
                    <IconMoreVertical title="expand" />
                )}
            </div>
        ),
        style: {
            cursor: "pointer",
            padding: "var(--space-xs) var(--space-sm)",
            textAlign: "center",
            userSelect: "none"
        }
    },

    {
        Header: "Title",
        accessor: "property_title",
        filterable: true,
        resizable: true
    },
    {
        Header: "Street",
        accessor: "street",
        resizable: true
    },
    {
        Header: "Units",
        accessor: "units_count",
        maxWidth: 100
    }
];

const columns_small = [
    {
        expander: true,
        Header: () => <strong>More</strong>,
        width: 65,
        Expander: ({ isExpanded, ...rest }) => (
            <div title="click">
                {isExpanded ? (
                    <IconX title="collapse" />
                ) : (
                    <IconMoreVertical title="expand" />
                )}
            </div>
        ),
        style: {
            cursor: "pointer",
            padding: "var(--space-xs) var(--space-sm)",
            textAlign: "center",
            userSelect: "none",
            maxWidth: 20
        }
    },
    {
        Header: "Title",
        accessor: "property_title",
        filterable: true,
        resizable: true,
        maxWidth: 230
    }
];

export function PropertyTable(props) {
    return (
        <StyledTable
            data={props.data}
            noDataText="No Properties as yet"
            columns={window.screen.width > 425 ? columns : columns_small}
            defaultPageSize={7}
            className="-highlight margin-top--md"
            SubComponent={row => {
                return (
                    <TableMore refresh={props.refresh} data={row.original} />
                );
            }}
        />
    );
}

Modal.setAppElement("#modal");
class TableMore extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalIsOpen: false,
            modalTitle: null,
            content: null
        };
        this.setState = this.setState.bind(this);
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal(id, data) {
        this.renderContent(id, data);
    }

    closeModal() {
        this.setState({ modalIsOpen: false });
        this.props.refresh();
    }

    renderContent(key, data) {
        switch (key) {
            case 1:
                this.setState({
                    modalIsOpen: true,
                    modalTitle: "Edit",
                    content: (
                        <div className="margin-top--lg margin-bottom--lg">
                            <PropertyForm
                                closeModal={this.closeModal}
                                data={this.props.data}
                                update={data}
                            />
                        </div>
                    )
                });
                break;
            case 2:
                this.setState({
                    modalIsOpen: true,
                    modalTitle: "Delete",
                    content: (
                        <div style={{ padding: "20px" }}>
                            <p>
                                Are you sure you want to delete this property?
                                <br />
                                You will loose:
                            </p>
                            <ul>
                                <li>This Property</li>
                                <li>
                                    All {data.units_count} Units belonging to
                                    this property
                                </li>
                                <li>All Unit images</li>
                                <li>Any other related data</li>
                            </ul>
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "space-around"
                                }}
                            >
                                <button
                                    className="btn btn--bordered btn--full-width"
                                    onClick={this.closeModal}
                                >
                                    Cancel
                                </button>
                                <div style={{ margin: "var(--space-xs)" }} />
                                <button
                                    onClick={() => {
                                        this.delete(data.uuid);
                                    }}
                                    className="btn btn--danger btn--full-width"
                                >
                                    Yes, Delete
                                </button>
                            </div>
                        </div>
                    )
                });
                break;
            default:
                this.setState({
                    modalIsOpen: true,
                    modalTitle: "Modal",
                    content: (
                        <b className="margin-top--lg margin-bottom--lg">
                            Pass an id to the openModal()
                        </b>
                    )
                });
                break;
        }
    }

    delete(data) {
        deleteProperty(data)
            .then(() => {
                this.closeModal();
                notification.success("property deleted");
            })
            .catch(error => {
                if (error.response) {
                    console.log(error);
                }
            });
    }

    render() {
        return (
            <div>
                <div
                    style={{
                        padding: "2px calc(var(--space-md) + 0.2em)",
                        background: "var(--black)",
                        color: "white"
                    }}
                >
                    <p className="text--md margin-bottom--none margin-top--md text--bold">
                        {this.props.data.street}
                    </p>
                    <p className="text--rg margin-top--none">
                        {this.props.data.city}, {this.props.data.state}{" "}
                        <ExternalLink
                            to={`https://www.google.com/maps/search/${this.props.data.street},${this.props.data.city},${this.props.data.state}`}
                        >
                            View on map
                        </ExternalLink>
                    </p>
                    <p className="text--rg margin-top--none">
                        {this.props.data.property_description}
                    </p>

                    <p className="text--rg margin-top--none">
                        <b>units</b>:<Space /> {this.props.data.units_count}
                    </p>
                </div>
                <FlexRow>
                    <FlexItem>
                        <button
                            title="Update details of this property"
                            className="btn btn--secondary btn--sm"
                            onClick={() => this.openModal(1, this.props.data)}
                        >
                            Edit
                        </button>
                    </FlexItem>
                    <FlexItem>
                        <button
                            title={`Delete property ${this.props.data.property_title}`}
                            onClick={() => this.openModal(2, this.props.data)}
                            className="btn btn--secondary btn--sm"
                        >
                            Delete
                        </button>
                    </FlexItem>
                </FlexRow>

                <Modal
                    isOpen={this.state.modalIsOpen}
                    onRequestClose={this.closeModal}
                    contentLabel="Modal"
                    className="modal-content"
                    overlayClassName="modal-overlay"
                >
                    <ModalHeader
                        modalTitle={this.state.modalTitle}
                        closeModal={this.closeModal}
                    />
                    <div className="grid-center">{this.state.content}</div>
                    <div className="margin-bottom--lg" />
                </Modal>
            </div>
        );
    }
}
