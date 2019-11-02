import { FlexItem, FlexRow } from "../elements/FlexView";
import { LogTimeForm, UnitForm } from "../ui/inputs/Form";
import React, { Component } from "react";
import * as moment from 'moment';
import {getClientManager} from "../../helper/apiHelper";
import Badge from "../ui/surfaces/Badge";
import Container from "../ui/content/Container";
import { IconEdit } from "./../ui/content/Icon";
import { IconMoreVertical } from "../ui/content/Icon";
import { Line } from "../ui/content/Line";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import { ModalHeader } from "../ui/surfaces/Modal";
import { OverviewContext } from "../elements/OverviewRoute";
import Page from "../elements/Page";
import Space from "../ui/content/WhiteSpace";
import styled from "styled-components";

const StyledTable = styled.table`
    border-collapse: collapse;
    width: 100%;

    th,
    td {
        text-align: left;
        padding: 8px;
        min-width: 160px;
    }

    .head-row {
        background: var(--black);
        color: var(--white);
    }

    .fixed-col {
        position: sticky;
        left: -1px;
        border-right: 2px solid white;
        border-left: 2px solid white;
        background: #f1f1f1;
        z-index: 2;
    }

    .fixed-col-th {
        background: var(--black);
    }

    tr {
        background-color: #f1f1f1;
        border-bottom: 1px solid #fff;
    }
`;

class Employee extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalIsOpen: false,
            modalTitle: null,
            content: null,
            manager:""
        };
        this.setState = this.setState.bind(this);
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }
    openModal(id, data) {
        this.renderContent(id, data);
    }

    closeModal() {
        this.props.refresh();
        this.setState({ modalIsOpen: false });
    }

    renderContent(key, data) {
        switch (key) {
            case 1:
                this.setState({
                    modalIsOpen: true,
                    modalTitle: "Log Time",
                    content: (
                        <div className="grid-center">
                            <LogTimeForm closeModal={this.closeModal} data={data.clients} />
                        </div>
                    )
                });
                break;
            case 2:
                this.setState({
                    modalIsOpen: true,
                    modalTitle: "My Details",
                    content: (
                        <div className="grid-center">
                            <div className="margin-top--lg margin-bottom--lg">
                                <div className="text--rg text-grey margin-top--sm margin-bottom--sm">
                                    <b>Name: </b>
                                    <p className="text--blue margin-top--none margin-bottom--none">
                                        {data.first_name} {data.last_name}
                                    </p>
                                </div>
                                 <div className="text--rg text-grey margin-top--sm margin-bottom--sm">
                                    <b>Email: </b>
                                    <p className="text--blue margin-top--none margin-bottom--none">
                                        {data.email}
                                    </p>
                                </div>
                                <div className="text--rg text-grey margin-top--sm margin-bottom--sm">
                                    <b>Role: </b>
                                    <p className="text--blue margin-top--none margin-bottom--none">
                                        {data.roles[0]}
                                    </p>
                                </div>
                                <div className="text--rg text-grey margin-top--sm margin-bottom--sm">
                                    <b>Address: </b>
                                    <p className="text--blue margin-top--none margin-bottom--none">
                                        {data.street}, {data.city}, {data.parish}, {data.country}
                                    </p>
                                </div>
                            </div>
                        </div>
                    )
                });
                break;
                case 3:
                this.setState({
                    modalIsOpen: true,
                    modalTitle: "Update",
                    content: (
                        <div className="grid-center">
                            <LogTimeForm closeModal={this.closeModal} update={data[0]} data={data[1]} />
                        </div>
                    )
                });
                break;
                case 4:
                getClientManager(data).then(res=>{
                    let name = res.data.first_name+ " " + res.data.last_name;
                    this.setState({manager: name});
                    this.setState({
                    modalIsOpen: true,
                    modalTitle: "Manager",
                    content: (
                        <div className="grid-center">
                            <div className="margin-top--lg margin-bottom--lg">
                                <div className="text--rg text-grey margin-top--sm margin-bottom--sm">
                                    <b>Manager: </b>
                                    <p className="text--blue margin-top--none margin-bottom--none">
                                        {this.state.manager}
                                    </p>
                                </div>
                            </div>
                        </div>
                    )
                })   
                });
                break;
            default:
                this.setState({
                    modalIsOpen: true,
                    modalTitle: "Modal",
                    content: (
                        <div className="grid-center">
                            <b className="margin-top--lg margin-bottom--lg">
                                Default
                            </b>
                        </div>
                    )
                });
                break;
        }
    }

    render() {

function clientName(array,ind){
    const result = array.find( ({ id }) => id == ind );      
    return result.name    
}

function timeDiff(from,to){
    var start = moment(from);
    var end = moment(to);
    let duration = moment.duration(start.diff(end));
    let hours = duration.asHours();    
    return Math.abs(hours);
}

function overTime(hours,basehours){
    let overtime = 0;
    if(hours>basehours){
        overtime = hours - basehours;
    }    
    return overtime;
}
 
return (
            <OverviewContext.Consumer>
                {context => (
                    <Page>
                        <span
                            aria-label="You can go ahead and log your times"
                            data-balloon-pos="right"
                            data-balloon-length="medium"
                        >
                            <Badge>?</Badge>
                        </span>
                        <div className="margin-bottom--xxs" />
                        <Container>
                        <p className="text--bold">logged in as {`${this.props.user.first_name} ${this.props.user.last_name} `}</p>
                        <Line/>
                            <ButtonBar
                                isLoading={context.state.isLoading}
                                data={context.state}
                                user={this.props.user}
                                openModal={this.openModal}
                            />
                            <div className="margin-bottom--sm" />
                            <Line />
                            <div tabIndex="0" style={{ overflowX: "auto" }}>
                                <StyledTable>
                                    <tbody>
                                        <tr className="head-row">
                                            <th className="fixed-col fixed-col-th">
                                                Date
                                            </th>
                                            <th>Client</th>
                                            <th>Manager</th>
                                            <th>Task</th>
                                            <th>Comment</th>
                                            <th>From</th>
                                            <th>To</th>
                                            <th>Hours spent</th>
                                            <th>Hours overtime</th>
                                            <th>Status</th>
                                        </tr>
                                        {context.state.userTimesheets.map(x => (
                                            <tr key={Math.random()}>
                                                <td className="fixed-col">
                                                    <button
                                                        onClick={() =>
                                                            this.openModal(3,[x,context.state.clients])
                                                        }
                                                        aria-label={`edit entry ${x.date}`}
                                                        data-balloon-pos="right"
                                                        data-balloon-length="small"
                                                        className="btn btn--primary btn--sm"
                                                    >
                                                        <IconEdit
                                                            strokeWidth={3}
                                                        />
                                                    </button>
                                                    <Space amount={3} />
                                                    {x.date}
                                                </td>
                                                <td>{clientName(context.state.clients,x.client_id)}</td>
                                                <td><button
                                                        onClick={() =>
                                                            this.openModal(4, x.client_id)
                                                        }
                                                        className="btn btn--primary btn--sm"
                                                    >
                                                        view
                                                    </button></td>
                                                <td>{x.task}</td>
                                                <td
                                                    aria-label={x.comment}
                                                    data-balloon-pos="up"
                                                    data-balloon-length="medium"
                                                >
                                                    {x.comment}
                                                </td>
                                                <td>{x.from}</td>
                                                <td>{x.to}</td>
                                                <td>{timeDiff(x.from,x.to)}</td>
                                                <td>{overTime(timeDiff(x.from,x.to),8)}</td>
                                                <td>{x.status}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </StyledTable>
                            </div>

                            <div className="margin-bottom--md" />
                            <Modal
                                isOpen={this.state.modalIsOpen}
                                onRequestClose={this.closeModal}
                                blur={true}
                                contentLabel="Modal"
                                className="modal-content"
                                overlayClassName="modal-overlay"
                            >
                                <ModalHeader
                                    modalTitle={this.state.modalTitle}
                                    closeModal={this.closeModal}
                                    blur={true}
                                />
                                {this.state.content}
                                <div className="margin-bottom--lg" />
                            </Modal>
                        </Container>
                    </Page>
                )}
            </OverviewContext.Consumer>
        );
    }
}

function ButtonBar(props) {
    return (
        <FlexRow>
            <FlexItem>
                <button
                    onClick={() => props.openModal(1, props.data)}
                    className="btn btn--primary btn--md"
                >
                    Log Time
                </button>
            </FlexItem>
            <FlexItem>
                <button
                    onClick={() => props.openModal(2, props.user)}
                    className="btn btn--secondary btn--md"
                >
                    My Details
                </button>
            </FlexItem>
        </FlexRow>
    );
}

export default Employee;
