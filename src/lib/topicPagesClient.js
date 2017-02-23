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

                  $('.lx-stream-post--has-meta').filter(function() {

                      title = $('.lx-stream-post__header-title').eq(0).text();
                      summary= $('.gel-body-copy').eq(0).text();

                      json = {
                          "title" : title,
                          "summary" : summary
                      };
                      return json
                  });
              $('article'[0]).filter(function() {

              });
          });

           resolve(json);

        } else {
          console.log("reject");
          reject();
        }

      });
    });
  }
}

