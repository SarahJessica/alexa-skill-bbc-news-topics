'use strict';

const AlexaSkill = require('./AlexaSkill');
const AlexaAnswer = require('./lib/alexaResponseObjectConstructors.js');
const INTENTS = require('./lib/intentHandlers.js');

const APP_ID = undefined; //replace with 'amzn1.echo-sdk-ams.app.[your-unique-value-here]';


const bbcNewsTopicsSkill = function () {
  AlexaSkill.call(this, APP_ID);
};


bbcNewsTopicsSkill.prototype = Object.create(AlexaSkill.prototype);
bbcNewsTopicsSkill.prototype.constructor = bbcNewsTopicsSkill;

bbcNewsTopicsSkill.prototype.eventHandlers.onSessionStarted = function (sessionStartedRequest, session) {
  console.log('bbcNewsTopicsSkill onSessionStarted requestId: ' + sessionStartedRequest.requestId + ', sessionId: ' + session.sessionId);
};

bbcNewsTopicsSkill.prototype.eventHandlers.onLaunch = function (launchRequest, session, response) {
  console.log('bbcNewsTopicsSkill onLaunch requestId: ' + launchRequest.requestId + ', sessionId: ' + session.sessionId);
  var speechOutput = 'Welcome to the BBC News Topics skill, you can get the latest news on hundreds of news topics';
  var repromptText = 'You can get the latest news on hundreds of news topics';
  response.ask(speechOutput, repromptText);
};


bbcNewsTopicsSkill.prototype.intentHandlers = {
  "LatestNewsIntent": function (intent, session, response) {
    const topic = intent.slots.Topic.value.toLowerCase();
    INTENTS.latestNewsResponseFunction(topic, response);
  }
};

bbcNewsTopicsSkill.prototype.eventHandlers.onSessionEnded = function (sessionEndedRequest, session) {
  console.log('bbcNewsTopicsSkill onSessionEnded requestId: ' + sessionEndedRequest.requestId + ', sessionId: ' + session.sessionId);
};

exports.handler = function (event, context) {
  var bbcNewsTopicsSkill = new bbcNewsTopicsSkill();
  bbcNewsTopicsSkill.execute(event, context);
};
