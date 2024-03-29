"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tweets_controller_1 = require("../controllers/tweets.controller");
const router = (0, express_1.Router)();
router.get('/', tweets_controller_1.tweetList);
router.get('/new', tweets_controller_1.tweetNew);
router.post('/', tweets_controller_1.tweetCreate);
router.get('/edit/:tweetId', tweets_controller_1.tweetEdit);
router.post('/update/:tweetId', tweets_controller_1.tweetUpdate);
router.delete('/:tweetId', tweets_controller_1.tweetDelete);
exports.default = router;
//# sourceMappingURL=tweets.routes.js.map