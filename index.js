var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');

url = 'http://time.com/';
request(url, function(error, response, html){
  if(!error){
    var $ = cheerio.load(html);
    var json = {
      news : {}      
      };
    
    $('.last-column .column-tout .column-tout-info .column-tout-metadata a').each((i,el) =>{
      const Title = $(el).text().replace(/\s\s+/g, '');
      const link = $(el).attr('href');
      var title = "title: "+ Title;
      var lenk = "link: http://time.com"+ link;
      json.news[i] = [title,lenk];
     });
  }
  fs.writeFile('output.json', JSON.stringify(json, null,1), function(err){
    console.log("done");
  });
});
