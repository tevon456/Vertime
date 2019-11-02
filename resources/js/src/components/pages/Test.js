import { Avatar, AvatarGroup } from "../ui/content/Avatar";
import { BaseCard, CardContent, CardWrapper } from "../ui/surfaces/Card";

import Container from "../ui/content/Container";
import CustomLink from "./../ui/navigation/CustomLink";
import DropdownButton from "../ui/inputs/DropdownButton";
import { HOME } from "./../../constants/Routes";
import { IconTrash } from "../ui/content/Icon";
import Note from "../ui/content/Note";
import Page from "../elements/Page";
import React from "react";
import Toggle from "../ui/inputs/Toggle";
import notification from "./../../helper/notificationHelper";

function Test() {
    return (
        <Page padding={true}>
            <h1>Design System</h1>

            <BaseCard imageSrc="https://source.unsplash.com/q73G6DdhtAM/312x312">
                <b>34unit Ave, Kingston 7</b>

                <p>
                    <b>Appartment</b>
                </p>
                <div className="btns ">
                    <DropdownButton
                        text="Data"
                        className="btn btn--primary btn--md "
                        background="#0A8754"
                        x="-36%"
                        y="22px"
                        width="170px"
                        onClick={() => notification.info("hello world")}
                    >
                        <li>Schedule</li>
                        <li>Draft</li>
                        <li>Delete</li>
                    </DropdownButton>
                </div>
            </BaseCard>

            <Toggle
                color="#05C46E"
                switchOff={() => notification.info("off")}
            />
            <Toggle
                color="var(--blue)"
                switchOff={() => notification.info("off")}
            />
            <Toggle
                color="#C7EF00"
                switchOff={() =>
                    notification.success(
                        "Check your email to complete registration"
                    )
                }
            />
            <Toggle switchOn={() => notification.success("on")} />
            <Note type="danger">Something dangerous</Note>
            <Note type="warning">Youve been warned</Note>
            <Note type="info">Just so you know</Note>

            <h3>Avatar</h3>
            <p>
                Avatars are used to represent users by showing a user defined
                picture.
            </p>

            <Container>
                <p>
                    <b>size: </b> "small" | "medium" | "large" | "huge"
                </p>
                <p>
                    <b>src: </b> a url pointing to the image
                </p>
                <p>
                    <b>alt: </b> a description of avatar image content for
                    accessibility
                </p>
                <hr />
                <Avatar
                    src="https://source.unsplash.com/r0eATOYBxJ4/80x80"
                    first_name="mike"
                    last_name="will"
                    size="small"
                />
                <Avatar
                    src="https://source.unsplash.com/r0eATOYBxJ4/80x80"
                    first_name="mike"
                    last_name="will"
                    size="medium"
                />
                <Avatar
                    id="second-element-introduction"
                    src="https://source.unsplash.com/r0eATOYBxJ4/80x80"
                    first_name="mike"
                    last_name="will"
                    size="large"
                />
                <Avatar
                    verified={true}
                    first_name="mike"
                    last_name="will"
                    src="https://source.unsplash.com/r0eATOYBxJ4/80x80"
                    size="huge"
                />
            </Container>

            <h3>AvatarGroup</h3>
            <p>Wrapper component for creating a group of nested avatars.</p>
            <Container>
                <AvatarGroup>
                    <Avatar
                        src="https://source.unsplash.com/r0eATOYBxJ4/70x70"
                        size="medium"
                    />
                    <Avatar
                        src="https://source.unsplash.com/3-nx5glV7jo/70x70"
                        size="medium"
                    />
                    <Avatar
                        src="https://source.unsplash.com/owqMrL136aA/70x70"
                        size="medium"
                    />
                    <Avatar
                        src="https://source.unsplash.com/RPUD-n9V6E0/80x80"
                        size="medium"
                    />
                </AvatarGroup>
                <br />
                <AvatarGroup>
                    <Avatar first_name="Abe" last_name="Sill" size="medium" />
                    <Avatar first_name="Bike" last_name="Dill" size="medium" />
                    <Avatar first_name="Cike" last_name="Hill" size="medium" />
                    <Avatar first_name="Dike" last_name="Rill" size="medium" />
                    <Avatar first_name="Ebe" last_name="Will" size="medium" />
                    <Avatar first_name="Fike" last_name="Will" size="medium" />
                    <Avatar first_name="Gike" last_name="Oill" size="medium" />
                    <Avatar first_name="Hike" last_name="Will" size="medium" />
                    <Avatar first_name="Ike" last_name="Yill" size="medium" />
                    <Avatar first_name="Jike" last_name="Qill" size="medium" />
                    <Avatar first_name="Kike" last_name="Will" size="medium" />
                    <Avatar first_name="Like" last_name="Will" size="medium" />
                    <Avatar first_name="Mike" last_name="Will" size="medium" />
                    <Avatar first_name="Nike" last_name="Will" size="medium" />
                </AvatarGroup>
            </Container>

            <h3>Button</h3>
            <p>
                Buttons use default html button tag and are styled using css not
                styled components
            </p>
            <Container>
                <p>
                    <b>default class : </b> "btn"
                </p>
                <p>
                    <b>type class : </b> "btn--primary" | "btn--secondary" |
                    "btn--blue"
                </p>
                <p>
                    <b>size class : </b> "btn--sm" | "btn--md" | "btn--lg" |
                    "btn--full-width"
                </p>
                <hr />
                <p>Types</p>
                <div className="btns">
                    <button className="btn btn--primary btn--sm ">
                        primary
                    </button>
                    <button className="btn btn--secondary btn--sm">
                        secondary
                    </button>
                    <button className="btn btn--blue btn--sm ">blue</button>
                    <button className="btn btn--danger btn--sm ">danger</button>
                    <button className="btn btn--bordered btn--sm">
                        bordered
                    </button>
                </div>
                <br />
                <p>Sizes</p>
                <div className="btns">
                    <button className="btn btn--secondary btn--sm">
                        small
                    </button>
                </div>
                <br />
                <div className="btns">
                    <button className="btn btn--secondary btn--md">
                        medium
                    </button>
                </div>
                <br />
                <div className="btns">
                    <button className="btn btn--secondary btn--lg">
                        large
                    </button>
                </div>
                <br />
                <div className="btns">
                    <button className="btn btn--secondary btn--full-width ">
                        I'm full width
                    </button>
                </div>
                <br />
                <p>Disabled state</p>
                <div className="btns">
                    <button
                        className="btn btn--secondary btn--full-width"
                        disabled
                    >
                        I'm Disabled
                    </button>
                </div>
                <br />
                <p>Icon Buttons</p>
                <div className="btns">
                    <button className="btn btn--secondary btn--md">
                        <IconTrash />
                    </button>
                    <button className="btn btn--bordered btn--md">
                        <IconTrash />
                    </button>
                </div>
            </Container>

            <h3>Card</h3>
            <Container id="step3">
                <CardWrapper>
                    <CardContent>
                        <Avatar
                            src="https://source.unsplash.com/nWdhpUrXxYY/70x70"
                            size="medium"
                        />
                        <span
                            style={{
                                transform: "translateY(9px)",
                                position: "absolute",
                                padding: "4px"
                            }}
                        >
                            by <CustomLink to={HOME}>Tev Davis</CustomLink>
                        </span>
                    </CardContent>
                </CardWrapper>
                <br />
                <BaseCard imageSrc="https://source.unsplash.com/q73G6DdhtAM/312x312">
                    <b>34unit Ave, Kingston 7</b>

                    <p>
                        <b>Appartment</b>
                    </p>
                    <div className="btns">
                        <button className="btn btn--primary btn--sm ">
                            view
                        </button>
                        <button className="btn btn--secondary btn--sm">
                            save
                        </button>
                    </div>
                </BaseCard>
                <br />
                <BaseCard imageSrc="https://source.unsplash.com/q73G6DdhtAM/312x312">
                    <button className="btn btn--bordered btn--sm">
                        <IconTrash />
                        <b>34unit Ave, Kingston 7</b>
                    </button>
                </BaseCard>
                <br />
                <BaseCard>
                    <AvatarGroup>
                        <Avatar
                            src="https://source.unsplash.com/r0eATOYBxJ4/70x70"
                            size="medium"
                        />
                        <Avatar
                            src="https://source.unsplash.com/3-nx5glV7jo/70x70"
                            size="medium"
                        />
                        <Avatar
                            src="https://source.unsplash.com/owqMrL136aA/70x70"
                            size="medium"
                        />
                        <Avatar
                            src="https://source.unsplash.com/RPUD-n9V6E0/70x70"
                            size="medium"
                        />
                    </AvatarGroup>
                    <br />
                    <b>Applicants</b>
                    <p>30 new</p>
                    <div className="btns">
                        <button className="btn btn--primary btn--full-width ">
                            view
                        </button>
                    </div>
                </BaseCard>
            </Container>

            <h3>Colors</h3>
            <p>
                Colors utilized throughout the application. All colors meet the
                WCAG 2.0 guidelines for contrast accessibility.
            </p>
            <p>
                <b>info: </b>
                shading is done using a pure custom css color finction I built
            </p>
            <Container>
                <p>Colors</p>
                <div
                    style={{
                        background: "var(--red)",
                        padding: "8px",
                        color: "var(--primary-color-2)"
                    }}
                >
                    --red
                </div>
                <div
                    style={{
                        background: "var(--orange)",
                        padding: "8px",
                        color: "var(--primary-color-2)"
                    }}
                >
                    --orange
                </div>
                <div
                    style={{
                        background: "var(--yellow)",
                        padding: "8px",
                        color: "var(--secondary-color)"
                    }}
                >
                    --yellow
                </div>
                <div
                    style={{
                        background: "var(--green)",
                        padding: "8px",
                        color: "var(--primary-color-2)"
                    }}
                >
                    --green
                </div>
                <div
                    style={{
                        background: "var(--blue)",
                        padding: "8px",
                        color: "var(--primary-color-2)"
                    }}
                >
                    --blue
                </div>
                <p>Accent</p>
                <div
                    style={{
                        background: "var(--accent-color-dark)",
                        padding: "8px",
                        color: "var(--primary-color-2)"
                    }}
                >
                    --accent-color-dark
                </div>
                <div
                    style={{
                        background: "var(--accent-color)",
                        padding: "8px",
                        color: "var(--primary-color-2)"
                    }}
                >
                    --accent-color
                </div>
                <div
                    style={{
                        background: "var(--accent-color-light)",
                        padding: "8px",
                        color: "var(--primary-color-2)"
                    }}
                >
                    --accent-color-light
                </div>
                <div
                    style={{
                        background: "var(--accent-color-lighter)",
                        padding: "8px",
                        color: "var(--primary-color-2)"
                    }}
                >
                    --accent-color-lighter
                </div>
            </Container>

            <h3>Typography</h3>
            <p>Typography system and fonts</p>
            <Container>
                <p>
                    <b>primary font: </b> "Karla"
                </p>
                <p>
                    <b>secondary font: </b> "Bitter"
                </p>
                <hr />
                <h1>H1</h1>
                <h2>H2</h2>
                <h3>H3</h3>
                <h4>H4</h4>
                <h5>H5</h5>
                <h6>H6</h6>
                <hr />
                <p>
                    A paragraph (from the Ancient Greek paragraphos, "to write
                    beside" or "written beside") is a self-contained unit of a
                    discourse in writing dealing with a particular point or
                    idea. A paragraph consists of one or more sentences. Though
                    not required by the syntax of any language, paragraphs are
                    usually an expected part of formal writing, used to organize
                    longer prose.
                </p>
            </Container>
        </Page>
    );
}
export default Test;
