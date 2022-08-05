"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postRequest = exports.getRequest = void 0;
// import Ussd from '../model/ussd_schema';
const getRequest = (req, res) => {
    res.send("Build a simple USSD-BASED service that allows a user to update his name via USSD.");
};
exports.getRequest = getRequest;
const postRequest = (req, res) => {
    let { sessionId, serviceCode, phoneNumber } = req.body;
    let { text } = req.body;
    console.log(text);
    let response = "";
    switch (text) {
        case "1":
            response = `CON Choose account information you want to view
        1. Account Name
        2. Account Number
        3. Account Balance`;
            res.send(response);
            break;
        case "2":
            response = `END Your phone number is ${phoneNumber}`;
            res.send(response);
            break;
        case "1*1":
            let accountName = "Steve Chude";
            response = `END Your account name is ${accountName}`;
            res.send(response);
            break;
        case "1*2":
            let accountNumber = generateAccountNumber();
            response = `END Your account number is ${accountNumber}`;
            res.send(response);
            break;
        case "1*3":
            let balance = "NGN 10,000";
            response = `END Your account balance is ${balance}`;
            res.send(response);
            break;
        default:
            response = `CON What do you want to check
        1. My Account
        2. My Phone Number`;
            res.send(response);
    }
};
exports.postRequest = postRequest;
function generateAccountNumber() {
    return Math.floor(1000000000 + Math.random() * 9999999999);
}
// https://steve-ussd-app.herokuapp.com/
