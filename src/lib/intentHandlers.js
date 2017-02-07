'use strict';

const TOPICPAGES = require('./topicPagesClient');

var LatestNewsResponseFunction = function(topic){
  TOPICPAGES.getLatest(topic);
}

exports.register = LatestNewsResponseFunction;
