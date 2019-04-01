const feed = require("rss-to-json");

module.exports = {
  find: function(req, res) {
    feed.load(
      "https://bionewsfeeds.com/sitefeed/parkinsonsnewstoday/feed/",
      (err, rss) => {
        if (err) {
          throw err;
        }

        let news = [];
        for (rssfeed of rss.items) {
          news.push({
            title: rssfeed.title,
            link: rssfeed.link,
            date: rssfeed.pubDate
          });
        }

        return res.json(news);
      }
    );
  }
};
