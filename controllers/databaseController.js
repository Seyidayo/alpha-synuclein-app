const Database = require("../models/database");

module.exports = {
  create: function(req, res) {
    const options3 = {
      url: `https://api.nextprot.org/page-view/sequence/NX_P37840/xref?clientInfo=ndu&applicationName=xref-section`,
      json: true
    };

    process.stdout.write("Loading Database");
    // Database Section

    rp(options3)
      .then(data => {
        let databaseData = [];
        for (let database of data.entry.xrefs) {
          const Database = new Database();
          (Database.title = database.databaseName),
            (Database.tag = database.databaseCategory),
            (Database.link = database.resolvedUrl),
            (Database.dbIndex = database.accession),
            Database.save(err => {
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
    Database.find({})
      .then(database => res.json(database))
      .catch(err => res.status(422).json(err));
  }
};
