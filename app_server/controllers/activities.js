/* GET dashboard (home page) */
const dashboard = function (req, res) {
  res.render('dashboard', {
    title: 'Dashboard - ActivityLog',
    pageHeader: {
      title: 'Dashboard',
      strapline: 'Recent Activities'
    },
    columns: ['Type', 'Date', 'Duration', 'Notes'],
    activities: [{
      type: 'Running',
      date: '2026-03-31',
      duration: 45,
      notes: 'Morning 5K run in the park.'
    }, {
      type: 'Gym',
      date: '2026-03-30',
      duration: 60,
      notes: 'Upper-body strength workout.'
    }, {
      type: 'Cycling',
      date: '2026-03-29',
      duration: 90,
      notes: 'Evening ride along the river.'
    },
    {
      type:"Swimming",
      date: '2026-04-01',
      duration: 75,
      notes: '100 meteres distance swim'
    },
]
  });
};

module.exports = {
  dashboard
};
