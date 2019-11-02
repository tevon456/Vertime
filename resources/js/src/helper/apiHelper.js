import {
    ACTIVATE,
    API,
    AUTH,
    CREATE,
    FIND,
    CLIENT,
    TIME,
    LOGIN,
    LOGOUT,
    PASSWORD,
    USER,
    V,
} from "../constants/Routes";
import { getToken, isUserAuthenticated } from "./authHelper";

import { UPDATE } from "./../constants/Routes";
import axios from "axios";

axios.defaults.baseURL = location.origin + API;
axios.defaults.headers.common = {
    "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest",
    Authorization: `Bearer ${getToken()}`
};

/**
 * Headers for sending files to an endpoint
 */
const fileHeader = {
    "content-type":
        "multipart/form-data; charset=utf-8; boundary=" +
        Math.random()
            .toString()
            .substr(2)
};



/**
 * Login user and return token on success.
 *
 * @param {object} value
 */
export async function login(value) {
    let url = AUTH + LOGIN;
    const res = await axios.post(url, value);
    return res;
}

/**
 * logout user using token.
 */
export async function logout() {
    let url = AUTH + LOGOUT;
    const res = await axios.get(url);
    return res;
}

/**
 * List of clients.
 *
 */
export async function getClients() {
    let url = V[0] + AUTH + CLIENT;
    const res = await axios.get(url, { withCredentials: true });
    return res;
}

/**
 * Client's manager from id
 *
 */
export async function getClientManager(id) {
    let url = V[0] + AUTH + CLIENT+"/manager/"+id;
    const res = await axios.get(url, { withCredentials: true });
    return res;
}

/**
 * Fetch user's data using token.
 *
 */
export async function getUser() {
    let url = V[0] + AUTH + USER;
    const res = await axios.get(url, { withCredentials: true });
    return res;
}

/**
 * Get timesheets owned by user.
 *
 * @param {string} id
 */
export async function getUserTimesheets() {
    let url = V[0] + AUTH + USER + TIME;
    const res = await axios.get(url);
    return res;
}


/**
 * Create a new timesheet
 *
 * @param {object} values
 */
export async function createTimesheet(values) {
    let url = V[0] + AUTH + "/timesheet";
    const res = await axios({ method: "post", url: url, data: values });
    return res;
}

/**
 * Edit owned timesheet using id
 *
 * @param {object} data
 *
 */
export async function updateTimesheet(data) {
    let url = V[0] + AUTH + "/timesheet"+ UPDATE;
    const res = await axios({ method: "patch", url: url, data: data });
    return res;
}