const Article = require("../models/article");
const rp = require("request-promise");

module.exports = {
  create: function(req, res) {
    const options = {
      url: `https://www.frontiersin.org/research-topics/6015/articles?index=1&sortby=date&pagesize=12&isrecent=false`,
      json: true
    };
    const options1 = {
      url: `https://api.nextprot.org/entry-publications/entry/NX_P37840/category/curated.json?clientInfo=Calipho%20Group&applicationName=neXtProt%20publications`,
      json: true
    };

    const options2 = {
      url: `https://api.nextprot.org/entry-publications/entry/NX_P37840/category/additional.json?clientInfo=Calipho%20Group&applicationName=neXtProt%20publications`,
      json: true
    };

    process.stdout.write("Loading Articles");

    // Articles Section
    rp(options)
      .then(data => {
        for (let article of data.Articles) {
          const Articles = new Article();
          (Articles.title = article.ArticleTitle),
            (Articles.link = article.ArticleUrl),
            (Articles.description = article.Abstract),
            (Articles.authors = article.Authors),
            Articles.save(err => {
              if (err) {
                throw err;
              }
            });

          process.stdout.write(".");
        }
      })
      .catch(err => {
        throw err;
      });

    rp(options1)
      .then(data => {
        for (let article of data) {
          const Articles = new Article();
          (Articles.title = article.publication.title),
            (Articles.link = article.publication.dbXrefs[0].resolvedUrl),
            (Articles.description = article.publication.abstractText),
            (Articles.authors = article.publication.authors);
          Articles.save(err => {
            if (err) {
              throw err;
            }
          });
          process.stdout.write(".");
        }
      })
      .catch(err => {
        throw err;
      });

    rp(options2)
      .then(data => {
        for (let article of data) {
          const Articles = new Article();
          (Articles.title = article.publication.title),
            (Articles.link = article.publication.dbXrefs[0].resolvedUrl),
            (Articles.description = article.publication.abstractText),
            (Articles.authors = article.publication.authors);
          Articles.save(err => {
            if (err) {
              throw err;
            }
          });
          process.stdout.write(".");
        }
      })
      .catch(err => {
        throw err;
      });
  },

  find: function(req, res) {
    Article.find({})
      .then(article => res.json(article))
      .catch(err => res.status(422).json(err));
  }
};
