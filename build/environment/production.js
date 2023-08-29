"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const env_local_1 = __importDefault(require("./env.local"));
exports.default = {
    dbUrl: `mongodb+srv://${env_local_1.default.DB_MONGO_USERNAME}:${env_local_1.default.DB_MONGO_PWD}@cluster0.wnkhhb6.mongodb.net/tweets?retryWrites=true&w=majority`,
    cert: "/etc/letsencrypt/live/www.thmd.ovh/fullchain.pem",
    key: "/etc/letsencrypt/live/www.thmd.ovh/privkey.pem",
    portHttp: 80,
    portHttps: 443,
};
//# sourceMappingURL=production.js.map