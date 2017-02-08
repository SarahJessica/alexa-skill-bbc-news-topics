'use strict';

const TOPICPAGES = require('./topicPagesClient');
const TOPICMASTERLIST = function() {
    var topics = require('../../topicMasterList');
    return JSON.parse(topics);
}

var getLatestNews = function (topix) {
    const topicUuid = TOPICMASTERLIST.Topics[topix].getValue();
    TOPICPAGES.getLatest(topicUuid);
};

exports.latestNewsResponseFunction = getLatestNews;
