Meteor.publish('all-vehicles', function() {
  return Vehicles.find();
});

Meteor.publish('all-users', function() {
  return Users.find();
});

Meteor.publish('lazy-vehicles', function(limit) {
  return Vehicles.find({}, {
    'limit': limit
  });
});

Meteor.publish('lazy-users', function(limit) {
  return Users.find({}, {
    'limit': limit
  });
});

Meteor.publish('single-vehicle', function(vin) {
  return Vehicles.find({vin:vin});
});

Meteor.publish('single-user', function(vin) {
  return Users.find({id:id});
});

// Meteor.publish('userRoles', function() {
//   if (this.userId) {
//     return Meteor.users.find({_id: this.userId}, {fields: {roles:1}});
//   } else {
//     this.ready();
//   }
// });
