'use strict';

const TOPICPAGES = require('./topicPagesClient');
const TOPICMASTERLIST = require('../../topicMasterList');

var getLatestNews = function (topix, response) {
    const topixLC = topix.toLowerCase();
    const topicUuid = TOPICMASTERLIST.topixLC;
    const jsonResp =  TOPICPAGES.getLatest(topicUuid);
    response.tell("The latest news from the BBC on" + topixLC + "is" + jsonResp.title + jsonResp.summary);
};

exports.latestNewsResponseFunction = getLatestNews;
