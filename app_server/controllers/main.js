const index = function (req, res) {
  res.render('index', { title: 'MyProject' });
};

module.exports = {
  index
};