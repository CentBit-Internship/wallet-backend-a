"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ussd_controller_1 = require("../controllers/ussd_controller");
const router = express_1.default.Router();
router.get('/ussd', ussd_controller_1.getRequest);
router.post('/ussd/service', ussd_controller_1.postRequest);
exports.default = router;
