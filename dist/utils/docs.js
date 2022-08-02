"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ussd_swagger_1 = __importDefault(require("../routes/ussd.swagger"));
const swaggerDocumentation = {
    openapi: "3.0.0",
    info: {
        title: "Ussd App",
        version: "0.0.1",
        description: "This is a simple USSD-BASED service that allows a user to update his name via USSD.",
    },
    servers: [
        {
            url: "https://fathomless-atoll-54584.herokuapp.com",
            description: "deployed production api",
        },
        {
            url: "http://localhost:3000",
            description: "Local dev",
        },
    ],
    tags: [
        {
            name: "Ussd Based Service",
            description: "A simple USSD app.",
        },
    ],
    paths: Object.assign({}, ussd_swagger_1.default),
};
exports.default = swaggerDocumentation;
