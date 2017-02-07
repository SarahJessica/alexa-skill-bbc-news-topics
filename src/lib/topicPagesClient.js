'use strict';

const request = require('request');
const cheerio = require('cheerio');

const TOPIC_PAGE_URL = 'http://www.bbc.co.uk/news/topics/';


module.exports= {
  getLatest: function(uuid) {
    return new Promise(function (resolve, reject) {
      request(TOPIC_PAGE_URL + uuid, function(error, response, body) {

        if (!error && response.statusCode === 200) {
          const $ =  cheerio.load(body);

          var json;

          $('.lx-stream__feed').filter(function() {
              var title;
              var summary;
              var mediaSummary;
              $('.lx-stream-post--has-meta').filter(function() {

              title = $('.lx-stream-post__header-title').eq(0).text();
              summary = $('.qa-sty-summary').eq(0).text();
              mediaSummary = $('.lx-media-asset__summary').eq(0).text();

              json = {
                "title" : title,
                "summary" : summary,
                "mediaSummary" : mediaSummary
              };
              return json
            });
          });

          console.log("\n >>>>>>>>>>>> in the resolve bit");
          console.log("\n +++++++++++++++++++JSON \n \n" + json.summary);
          resolve(json);
        } else {
          console.log("reject");
          reject();
        }
      });
    });
  }
}
module.exports.getLatest();
