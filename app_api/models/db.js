const mongoose = require('mongoose');

const dbURI = "mongodb+srv://longnon1983_db_user:18Bodya2007@cluster0.dxxokck.mongodb.net/ActivityLog?retryWrites=true&w=majority";

try {
  mongoose.connect(dbURI).then(
    () => { console.log(" Mongoose is connected"); },
    err => { console.log(err); }
  );
}
catch (e) {
  console.log("could not connect");
}

require('./users');