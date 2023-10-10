"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authPageMiddelwear = void 0;
const authPageMiddelwear = (permission) => {
    return (req, res, next) => {
        //const isAuthenticated = checkAuthentication(req);
        next();
    };
};
exports.authPageMiddelwear = authPageMiddelwear;
