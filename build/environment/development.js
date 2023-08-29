"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const env_local_1 = __importDefault(require("./env.local"));
exports.default = {
    dbUrl: `mongodb+srv://${env_local_1.default.DB_MONGO_USERNAME}:${env_local_1.default.DB_MONGO_PWD}@cluster0.wnkhhb6.mongodb.net/tweets?retryWrites=true&w=majority`,
    cert: path_1.default.join(__dirname, '../../ssl/local.crt'),
    key: path_1.default.join(__dirname, '../../ssl/local.key'),
    portHttp: 3000,
    portHttps: 3001,
};
//# sourceMappingURL=development.js.map