const mongoose = require('mongoose');
const User = mongoose.model('User');

/* GET /api/users/:userid/activities
   returns the user's activities, newest first */
const activitiesList = function (req, res) {
  if (req.params && req.params.userid) {
    if (!mongoose.isValidObjectId(req.params.userid)) {
      return res
        .status(404)
        .json({ message: "userid not found" });
    }
    User
      .findById(req.params.userid)
      .select('name activities')
      .then(user => {
        if (!user) {
          return res
            .status(404)
            .json({ message: "userid not found" });
        }
        const activities = [...user.activities]
          .sort((a, b) => b.date - a.date);
        res
          .status(200)
          .json(activities);
      })
      .catch(err => {
        res
          .status(500)
          .json({ message: "Error retrieving activities", error: err });
      });
  } else {
    res
      .status(400)
      .json({ message: "No userid in request" });
  }
};

module.exports = {
  activitiesList
};
