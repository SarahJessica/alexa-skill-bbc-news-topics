'use strict';

function Response (outputSpeech, card, reprompt) {
  this.outputSpeech = outputSpeech;
  this.card = card;
  this.reprompt = reprompt;
}

function OutputSpeech (type, text, ssml) {
  this.type = type;
  this.text = text;
  this.ssml = ssml;
}

function Card (type, title, content, text, image) {
  this.type = type;
  this.title = title;
  this.content = content;
  this.text = text;
  this.image = image;
}

function Image (smallImageUrl, largeImageUrl) {
  this.smallImageUrl = smallImageUrl;
  this.largeImageUrl = largeImageUrl;
}

function Reprompt (outputSpeech) {
  this.outputSpeech = outputSpeech;
}

function Directives (type, playBehavior, autoItem) {
  this.type = type;
  this.playBehavior = playBehavior;
  this.autoItem = autoItem;
}

function Stream (token, url, offsetInMilliseconds) {
  this.token = token;
  this.url = url;
  this.offsetInMilliseconds = offsetInMilliseconds;
  }
}

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
