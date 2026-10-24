// Run these in mongosh (or paste the document into Atlas > Browse Collections > Insert Document)

use ActivityLog

db.users.insertOne({
  name: 'John Doe',
  email: 'john@example.com',
  createdOn: new Date(),
  activities: [{
    _id: ObjectId(),
    type: 'Running',
    date: new Date('2024-03-31'),
    duration: 45,
    notes: 'Morning 5K run in the park.',
    createdOn: new Date()
  }, {
    _id: ObjectId(),
    type: 'Gym',
    date: new Date('2024-03-30'),
    duration: 60,
    notes: 'Upper-body strength workout.',
    createdOn: new Date()
  }]
})

// Add one more activity to the same user (like adding a review in the lab)
db.users.updateOne(
  { email: 'john@example.com' },
  { $push: { activities: {
      _id: ObjectId(),
      type: 'Cycling',
      date: new Date('2024-03-29'),
      duration: 90,
      notes: 'Evening ride along the river.',
      createdOn: new Date()
  } } }
)

// Second user, so you have more than one document
db.users.insertOne({
  name: 'Jane Smith',
  email: 'jane@example.com',
  createdOn: new Date(),
  activities: [{
    _id: ObjectId(),
    type: 'Cycling',
    date: new Date('2024-04-02'),
    duration: 30,
    notes: 'Commute to college.',
    createdOn: new Date()
  }]
})

// Check
show collections
db.users.find()
