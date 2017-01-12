'use strict';

const AlexaSkill = require('./AlexaSkill');
const AlexaAnswer = require('./alexaResponseObjectConstructors.js')

const APP_ID = undefined;


const bbcNewsTopicsSkill = function () {
  AlexaSkill.call(this, APP_ID);
};


bbcNewsTopicsSkill.prototype = Object.create(AlexaSkill.prototype);
bbcNewsTopicsSkill.prototype.constructor = iPlayerSkill;

bbcNewsTopicsSkill.prototype.eventHandlers.onSessionStarted = function (sessionStartedRequest, session) {
  console.log('bbcNewsTopicsSkill onSessionStarted requestId: ' + sessionStartedRequest.requestId + ', sessionId: ' + session.sessionId);
};

bbcNewsTopicsSkill.prototype.eventHandlers.onLaunch = function (launchRequest, session, response) {
  console.log('bbcNewsTopicsSkill onLaunch requestId: ' + launchRequest.requestId + ', sessionId: ' + session.sessionId);
  var speechOutput = 'Welcome to the BBC News Topics skill, you can get the latest news on hundreds of news topics';
  var repromptText = 'You can get the latest news on hundreds of news topics';
  response.ask(speechOutput, repromptText);
};
