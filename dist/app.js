"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const router_1 = __importDefault(require("./routes/router"));
const db_1 = __importDefault(require("./db_config/db"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const docs_1 = __importDefault(require("./utils/docs"));
require("dotenv").config();
const app = (0, express_1.default)();
app.use((0, morgan_1.default)("dev"));
app.use(express_1.default.json());
// app.use(express.urlencoded({extended: true}));
app.use("/docs", swagger_ui_express_1.default.serve);
app.use("/docs", swagger_ui_express_1.default.setup(docs_1.default));
// Routes
app.use("/", router_1.default);
const port = process.env.PORT || 3004;
// DB Connection
const db_url = `mongodb+srv://stevechude:houseofgrace%401@rest-api.kpvocbv.mongodb.net/?retryWrites=true&w=majority`;
(0, db_1.default)(db_url);
app.listen(port, () => {
    console.log(`app is running on port ${port}`);
});
