'use strict';

var alexaResponseObject = {
  Response : function (outputSpeech, card, reprompt) {
    this.outputSpeech = outputSpeech;
    this.card = card;
    this.reprompt = reprompt;
  },
  OutputSpeech: function (type, text, ssml) {
    this.type = type;
    this.text = text;
    this.ssml = ssml;
  },
  Card: function (type, title, content, text, image) {
    this.type = type;
    this.title = title;
    this.content = content;
    this.text = text;
    this.image = image;
  },
  Image: function (smallImageUrl, largeImageUrl) {
    this.smallImageUrl = smallImageUrl;
    this.largeImageUrl = largeImageUrl;
  },
  Repromt: function (outputSpeech) {
  this.outputSpeech = outputSpeech;
  },
  Directives: function (type, playBehavior, autoItem) {
    this.type = type;
    this.playBehavior = playBehavior;
    this.autoItem = autoItem;
  },
  Stream: function (token, url, offsetInMilliseconds) {
    this.token = token;
    this.url = url;
    this.offsetInMilliseconds = offsetInMilliseconds;
  }

};

module.exports = alexaResponseObject;

// version, sessionAttributes, shouldEndSession

// {
//   "version": "string",
//   "sessionAttributes": {
//     "string": object
//   },
//   "response": {
//     "outputSpeech": {
//       "type": "string",
//       "text": "string",
//       "ssml": "string"
//     },
//     "card": {
//       "type": "string",
//       "title": "string",
//       "content": "string",
//       "text": "string",
//       "image": {
//         "smallImageUrl": "string",
//         "largeImageUrl": "string"
//       }
//     },
//     "reprompt": {
//       "outputSpeech": {
//         "type": "string",
//         "text": "string",
//         "ssml": "string"
//       }
//     },
//     "directives": [
//       {
//         "type": "string",
//         "playBehavior": "string",
//         "audioItem": {
//           "stream": {
//             "token": "string",
//             "url": "string",
//             "offsetInMilliseconds": 0
//           }
//         }
//       }
//     ],
//     "shouldEndSession": boolean
//   }
// }
