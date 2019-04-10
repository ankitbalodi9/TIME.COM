var request = require('request');
var cheerio = require('cheerio');
var url = 'http://time.com/';
request(url, function (error, response, html) {
  const $ = cheerio.load(html);
    $('.last-column .column-tout .column-tout-info .column-tout-metadata a').each((i,el) =>{
      const nam = $(el).text().replace(/\s\s+/g, '');
      const link = $(el).attr('href')
      console.log(nam,"\n");
      console.log('http://time.com'+link,"\n");                                                                              
    });                                                                
});
