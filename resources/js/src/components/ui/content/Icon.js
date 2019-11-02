import React from "react";

const Icon = props => {
    return (
        <span
            className={props.className}
            style={{
                display: "inline-block",
                lineHeight: 0
            }}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={props.width === undefined ? "1em" : props.width}
                height={props.height === undefined ? "1em" : props.height}
                // viewBox="0 0 24 24"
                viewBox={`0 ${
                    props.yAxis === undefined ? 0 : props.yAxis
                } 24 24`}
                stroke={
                    props.stroke === undefined ? "currentColor" : props.stroke
                }
                fill={props.fill === undefined || "" ? "none" : props.fill}
                strokeWidth={
                    props.strokeWidth === undefined || ""
                        ? "2"
                        : props.strokeWidth
                }
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                {props.children}
            </svg>
        </span>
    );
};

export const IconArchive = props => (
    <Icon
        stroke={props.stroke}
        strokeWidth={props.strokeWidth}
        fill={props.fill}
        yAxis={props.yAxis}
        width={props.width}
        height={props.height}
    >
        <polyline points="21 8 21 21 3 21 3 8" />
        <rect x="1" y="3" width="22" height="5" />
        <line x1="10" y1="12" x2="14" y2="12" />
    </Icon>
);

export const IconTrash = props => (
    <Icon
        stroke={props.stroke}
        strokeWidth={props.strokeWidth}
        fill={props.fill}
        yAxis={props.yAxis}
        width={props.width}
        height={props.height}
    >
        <polyline points="3 6 5 6 21 6" />
        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
        <line x1="10" y1="11" x2="10" y2="17" />
        <line x1="14" y1="11" x2="14" y2="17" />
    </Icon>
);

export const IconArrowRightUp = props => (
    <Icon
        stroke={props.stroke}
        strokeWidth={props.strokeWidth}
        fill={props.fill}
        yAxis={props.yAxis}
        width={props.width}
        height={props.height}
    >
        <line x1="7" y1="17" x2="17" y2="7" />
        <polyline points="7 7 17 7 17 17" />
    </Icon>
);

export const IconBookmark = props => (
    <Icon
        stroke={props.stroke}
        strokeWidth={props.strokeWidth}
        fill={props.fill}
        yAxis={props.yAxis}
        width={props.width}
        height={props.height}
    >
        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
    </Icon>
);

export const IconChevronDown = props => (
    <Icon
        stroke={props.stroke}
        strokeWidth={props.strokeWidth}
        fill={props.fill}
        yAxis={props.yAxis}
        width={props.width}
        height={props.height}
    >
        <polyline points="6 9 12 15 18 9" />
    </Icon>
);

export const IconChevonLeft = props => (
    <Icon
        stroke={props.stroke}
        strokeWidth={props.strokeWidth}
        fill={props.fill}
        yAxis={props.yAxis}
        width={props.width}
        height={props.height}
    >
        <polyline points="15 18 9 12 15 6" />
    </Icon>
);

export const IconChevronRight = props => (
    <Icon
        stroke={props.stroke}
        strokeWidth={props.strokeWidth}
        fill={props.fill}
        yAxis={props.yAxis}
        width={props.width}
        height={props.height}
    >
        <polyline points="9 18 15 12 9 6" />
    </Icon>
);

export const IconChevronUp = props => (
    <Icon
        stroke={props.stroke}
        strokeWidth={props.strokeWidth}
        fill={props.fill}
        yAxis={props.yAxis}
        width={props.width}
        height={props.height}
    >
        <polyline points="18 15 12 9 6 15" />
    </Icon>
);

export const IconCompass = props => (
    <Icon
        stroke={props.stroke}
        strokeWidth={props.strokeWidth}
        fill={props.fill}
        yAxis={props.yAxis}
        width={props.width}
        height={props.height}
    >
        <circle cx="12" cy="12" r="10" />
        <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
    </Icon>
);

export const IconUploadCloud = props => (
    <Icon
        stroke={props.stroke}
        strokeWidth={props.strokeWidth}
        fill={props.fill}
        yAxis={props.yAxis}
        width={props.width}
        height={props.height}
    >
        <polyline points="16 16 12 12 8 16" />
        <line x1="12" y1="12" x2="12" y2="21" />
        <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3" />
        <polyline points="16 16 12 12 8 16" />
    </Icon>
);

export const IconEdit = props => (
    <Icon
        stroke={props.stroke}
        strokeWidth={props.strokeWidth}
        fill={props.fill}
        yAxis={props.yAxis}
        width={props.width}
        height={props.height}
    >
        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
    </Icon>
);

export const IconEye = props => (
    <Icon
        stroke={props.stroke}
        strokeWidth={props.strokeWidth}
        fill={props.fill}
        yAxis={props.yAxis}
        width={props.width}
        height={props.height}
    >
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
    </Icon>
);

export const IconEyeOff = props => (
    <Icon
        stroke={props.stroke}
        strokeWidth={props.strokeWidth}
        fill={props.fill}
        yAxis={props.yAxis}
        width={props.width}
        height={props.height}
    >
        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
        <line x1="1" y1="1" x2="23" y2="23" />
    </Icon>
);

export const IconFlag = props => (
    <Icon
        stroke={props.stroke}
        strokeWidth={props.strokeWidth}
        fill={props.fill}
        yAxis={props.yAxis}
        width={props.width}
        height={props.height}
    >
        <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />{" "}
        <line x1="4" y1="22" x2="4" y2="15" />
    </Icon>
);

export const IconHeart = props => (
    <Icon
        stroke={props.stroke}
        strokeWidth={props.strokeWidth}
        fill={props.fill}
        yAxis={props.yAxis}
        width={props.width}
        height={props.height}
    >
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </Icon>
);

export const IconHelpCircle = props => (
    <Icon
        stroke={props.stroke}
        strokeWidth={props.strokeWidth}
        fill={props.fill}
        yAxis={props.yAxis}
        width={props.width}
        height={props.height}
    >
        <circle cx="12" cy="12" r="10" />{" "}
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />{" "}
        <line x1="12" y1="17" x2="12" y2="17" />
    </Icon>
);

export const IconHome = props => (
    <Icon
        stroke={props.stroke}
        strokeWidth={props.strokeWidth}
        fill={props.fill}
        yAxis={props.yAxis}
        width={props.width}
        height={props.height}
    >
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />{" "}
        <polyline points="9 22 9 12 15 12 15 22" />
    </Icon>
);

export const IconInfo = props => (
    <Icon
        stroke={props.stroke}
        strokeWidth={props.strokeWidth}
        fill={props.fill}
        yAxis={props.yAxis}
        width={props.width}
        height={props.height}
    >
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="16" x2="12" y2="12" />
        <line x1="12" y1="8" x2="12" y2="8" />
    </Icon>
);

export const IconLogIn = props => (
    <Icon
        stroke={props.stroke}
        strokeWidth={props.strokeWidth}
        fill={props.fill}
        yAxis={props.yAxis}
        width={props.width}
        height={props.height}
    >
        <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
        <polyline points="10 17 15 12 10 7" />
        <line x1="15" y1="12" x2="3" y2="12" />
    </Icon>
);

export const IconMenu = props => (
    <Icon
        stroke={props.stroke}
        strokeWidth={props.strokeWidth}
        fill={props.fill}
        yAxis={props.yAxis}
        width={props.width}
        height={props.height}
    >
        <line x1="3" y1="12" x2="21" y2="12" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <line x1="3" y1="18" x2="21" y2="18" />
    </Icon>
);

export const IconMoreVertical = props => (
    <Icon
        stroke={props.stroke}
        strokeWidth={props.strokeWidth}
        fill={props.fill}
        yAxis={props.yAxis}
        width={props.width}
        height={props.height}
    >
        <circle cx="12" cy="12" r="1" />
        <circle cx="12" cy="5" r="1" />
        <circle cx="12" cy="19" r="1" />
    </Icon>
);

export const IconPhone = props => (
    <Icon
        stroke={props.stroke}
        strokeWidth={props.strokeWidth}
        fill={props.fill}
        yAxis={props.yAxis}
        width={props.width}
        height={props.height}
    >
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </Icon>
);

export const IconPieChart = props => (
    <Icon
        stroke={props.stroke}
        strokeWidth={props.strokeWidth}
        fill={props.fill}
        yAxis={props.yAxis}
        width={props.width}
        height={props.height}
    >
        <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
        <path d="M22 12A10 10 0 0 0 12 2v10z" />
    </Icon>
);

export const IconPlusSquare = props => (
    <Icon
        stroke={props.stroke}
        strokeWidth={props.strokeWidth}
        fill={props.fill}
        yAxis={props.yAxis}
        width={props.width}
        height={props.height}
    >
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <line x1="12" y1="8" x2="12" y2="16" />
        <line x1="8" y1="12" x2="16" y2="12" />
    </Icon>
);

export const IconRotateCW = props => (
    <Icon
        stroke={props.stroke}
        strokeWidth={props.strokeWidth}
        fill={props.fill}
        yAxis={props.yAxis}
        width={props.width}
        height={props.height}
    >
        <polyline points="23 4 23 10 17 10" />
        <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
    </Icon>
);

export const IconSave = props => (
    <Icon
        stroke={props.stroke}
        strokeWidth={props.strokeWidth}
        fill={props.fill}
        yAxis={props.yAxis}
        width={props.width}
        height={props.height}
    >
        <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
        <polyline points="17 21 17 13 7 13 7 21" />
        <polyline points="7 3 7 8 15 8" />
    </Icon>
);

export const IconSettings = props => (
    <Icon
        stroke={props.stroke}
        strokeWidth={props.strokeWidth}
        fill={props.fill}
        yAxis={props.yAxis}
        width={props.width}
        height={props.height}
    >
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </Icon>
);

export const IconX = props => (
    <Icon
        stroke={props.stroke}
        strokeWidth={props.strokeWidth}
        fill={props.fill}
        yAxis={props.yAxis}
        width={props.width}
        height={props.height}
    >
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
    </Icon>
);

export const IconCopy = props => (
    <Icon
        stroke={props.stroke}
        strokeWidth={props.strokeWidth}
        fill={props.fill}
        yAxis={props.yAxis}
        width={props.width}
        height={props.height}
    >
        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
    </Icon>
);

export const IconMessage = props => (
    <Icon
        stroke={props.stroke}
        strokeWidth={props.strokeWidth}
        fill={props.fill}
        yAxis={props.yAxis}
        width={props.width}
        height={props.height}
    >
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
    </Icon>
);

export const IconSun = props => (
    <Icon
        stroke={props.stroke}
        strokeWidth={props.strokeWidth}
        fill={props.fill}
        yAxis={props.yAxis}
        width={props.width}
        height={props.height}
    >
        <circle cx="12" cy="12" r="5"></circle>
        <line x1="12" y1="1" x2="12" y2="3"></line>
        <line x1="12" y1="21" x2="12" y2="23"></line>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
        <line x1="1" y1="12" x2="3" y2="12"></line>
        <line x1="21" y1="12" x2="23" y2="12"></line>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
    </Icon>
);

export const IconMoon = props => (
    <Icon
        stroke={props.stroke}
        strokeWidth={props.strokeWidth}
        fill={props.fill}
        yAxis={props.yAxis}
        width={props.width}
        height={props.height}
    >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
    </Icon>
);
