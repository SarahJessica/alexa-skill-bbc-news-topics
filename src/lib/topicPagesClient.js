'use strict';

const request = require('request');
const cheerio = require('cheerio');

const TOPIC_PAGE_URL = 'http://www.bbc.co.uk/news/topics/';

// function scrape(pageUuid, pageUrl, numOfResponses) {
//   var url = [pageUrl, pageUuid].join('');
//   var firstChild = $('lx-stream__feed').children().first();
//   console.log(firstChild);
// }
//
// function scrape('4a894953-d9be-4425-b026-f4e2a057c030', topicPageUrl);


module.exports= {
  getLatest: function() {
    return new Promise(function (resolve, reject) {
      request(TOPIC_PAGE_URL + '4a894953-d9be-4425-b026-f4e2a057c030', function(error, response, body) {
        if (!error && response.statusCode === 200) {
          const $ =  cheerio.load(body);

          var json;

          $('lx-stream__feed').filter(function() {

            const latestStory = $(this).children().first();

            var title = latestStory.$('.lx-stream-post__header-title').text();
            var summary = latestStory.$('.qa-sty-summary').text();

            json = {"title" : title, "summary" : summary };
            return json
          });

          console.log("in the resolve bit");
          console.log(json);
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
