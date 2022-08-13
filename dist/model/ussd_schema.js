"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const ussdSchema = new mongoose_1.default.Schema({
    fullName: {
        type: String,
    },
    id: {
        type: Number,
    },
});
const UssdApp = mongoose_1.default.model('UssdApp', ussdSchema);
exports.default = UssdApp;
