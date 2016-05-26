
// syncTimer = new ReactiveTimer();
// syncTimer.start(1);

Meteor.startup(() => {
    // code to run on server at startup
    console.log("server started");
    if (Vehicles.find().count() === 0) {
        console.log("adding mocked vehicles");
        var vehicles = [{
            "id": 1,
            "licensePlate": "IN-1234",
            "vin": "8765-4321",
            "model": "S4",
            "active": true,
            "color": "red",
            "validTill": "2017-05-25T14:33:24.898+0000"
        }, {
            "id": 2,
            "licensePlate": "IN-5678",
            "vin": "1234-4321",
            "model": "Q3",
            "active": true,
            "color": "black",
            "validTill": "2017-05-25T14:33:24.901+0000"
        }];

        _.each(vehicles, (v) => Vehicles.insert(v));
    };

    if (Users.find().count() === 0) {
        console.log("adding mocked users");
        var users = [{
            "id": 1,
            "firstName": "Max",
            "lastName": "Power",
            "email": "test@user.com",
            "birthday": "1980-12-12T00:00:00.000+0000"
        }, {
            "id": 2,
            "firstName": "James",
            "lastName": "Bond",
            "email": "test2@user.com",
            "birthday": "1985-12-12T00:00:00.000+0000"
        }];

        _.each(users, (u) => Users.insert(u));
    };
});
