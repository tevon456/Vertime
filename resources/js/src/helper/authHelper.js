import { del, get } from "idb-keyval";

import { logout } from "./apiHelper";
import notification from "./notificationHelper";

/**
 * Authenticate a user by setting auth token locally
 * @param {string} token
 */
export function authenticateUser(token) {
    localStorage.setItem("jwt", token);
    localStorage.setItem("sync", "in");
}

/**
 * Check if user is authenticated.
 *
 * @returns {boolean}
 */
export function isUserAuthenticated() {
    return localStorage.getItem("jwt") !== null;
}

/**
 * Deauthenticate a user and clears up credentials.
 *
 */
export function deauthenticateUser() {
    logout()
        .then(res => {
            notification.success(res.data);
            del("user");
            localStorage.removeItem("jwt");
            localStorage.setItem("sync", "out");
        })
        .catch(error => {
            if (error.response) {
                console.log(error.response.data);
                del("user");
                localStorage.removeItem("jwt");
                localStorage.setItem("sync", "out");
            }
        });
}

/**
 * Return the users token.
 * @returns {string}
 */
export function getToken() {
    return localStorage.getItem("jwt");
}

export class Authorization {
    static init() {
        let permissions = {
            employee: [
                "view timesheet",
                "create timesheet",
                "edit timesheet"]
                ,
            manager: [
                "view timesheet",
                "delete timesheet",
                "approve timesheet",
            ]
        };
        Object.freeze(permissions);
        return permissions;
    }

    /**
     * Set the role
     */
    static set() {
        get("user").then(res => {
            localStorage.setItem("role", res.roles[0]);
        });
    }

    /**
     * Get the role
     */
    static get() {
        return localStorage.getItem("role");
    }

    /**
     * Resets the role if storage is tampered
     */
    static tamper() {
        del("user").then(() => {
            localStorage.removeItem("role");
            location.reload();
        });
    }

    /**
     * @param {string} role
     * @param {string[]} permission
     */
    static roleHasPermission(permission) {
        let therole = Authorization.init()[this.get()];
        if (therole) {
            return permission.every(check => therole.indexOf(check) >= 0);
        }
        return `${therole} does not exist`;
    }
}
