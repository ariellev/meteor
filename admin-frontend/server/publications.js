
Meteor.publish('all-vehicles', function() {
  return Vehicles.find({},{sort : {id : 1}});
});

Meteor.publish('all-users', function() {
  return Users.find();
});

Meteor.publish('search-vehicles', function(query, limit) {
  return Vehicles.find({$or: [{"licensePlate" : {$regex: query}}, {"vin" : {$regex: query}}, {"model" : {$regex: query}}, {"active" : {$regex: query}}, {"color" : {$regex: query}}]}, {limit: limit, sort : {id : 1}});
});

Meteor.publish('search-users', function(query, limit) {
  console.log('search-users, called=' + query);
  var cursor = Users.find({$or: [{"firstName" : {$regex: query}}, {"lastName" : {$regex: query}}]}, {limit: limit, sort : {id : 1}});
  console.log('search-users, result=' + JSON.stringify(cursor.fetch()));
  return cursor;
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
