Vehicles = new Mongo.Collection('vehicles');
Users = new Mongo.Collection('b-users');

// in secs
var syncInterval = 15;

syncUsers = function() {
  Meteor.http.call("GET", "http://localhost:8080/api/v1/users", (error, response) => {
      if (!error) {
          console.log('sync users, response=' + response.content);
          //Users.remove({});
          _.each(JSON.parse(response.content), (v) => {
              var user = Users.findOne({
                  id: v.id
              });
              if (typeof user === 'undefined') {
                  Users.insert(v);
              } else {
                  Users.update(user._id, v);
              }
          });
      }
  });
};

syncVehicles = function() {
  Meteor.http.call("GET", "http://localhost:8080/api/v1/vehicles", (error, response) => {
      if (!error) {
          console.log('sync vehicles, response=' + response.content);
          //Users.remove({});
          _.each(JSON.parse(response.content), (v) => {
              var vehicle = Vehicles.findOne({
                  id: v.id
              });
              if (typeof vehicle === 'undefined') {
                  Vehicles.insert(v);
              } else {
                  Vehicles.update(vehicle._id, v);
              }
          });
      }
  });
}

if (Meteor.isServer) {
    syncUsers();
    Meteor.setInterval(function() {
      syncUsers();
    }, 1000 * syncInterval);

    syncVehicles();
    Meteor.setInterval(function() {
      syncVehicles();
    }, 1000 * syncInterval);
}
