Meteor.methods({
    insertUser: function(userDocument) {
        if (this.isSimulation) {
            // client stub
            Session.set('saveButton', 'Saving...');
        } else {
            var ids = Users.find({}, { id: 1}).fetch().map( (u) => u.id);
            console.log("users, current ids=" + ids);
            var max = ids.length > 0 ? _.max(ids) + 1 : 1;
            userDocument.id = max;
            Users.insert(userDocument);

            // posting to backend
            var payload = {data: userDocument};
            Meteor.http.call("PUT", "http://localhost:8080/api/v1/users/save", payload, (e,d) => console.log(d));
            return userDocument.id;
        }
    },

    insertVehicle: function(vehicleDocument) {
        if (this.isSimulation) {
            // client stub
            Session.set('saveButton', 'Saving...');
        } else {
            var ids = Vehicles.find({}, { id: 1}).fetch().map( (u) => u.id);
            console.log("vehicles, current ids=" + ids);
            var max = ids.length > 0 ? _.max(ids) + 1 : 1;
            vehicleDocument.id = max;
            Vehicles.insert(vehicleDocument);

            // posting to backend
            var payload = {data: vehicleDocument};
            Meteor.http.call("PUT", "http://localhost:8080/api/v1/vehicles/save", payload, (e,d) => console.log(d));
            return vehicleDocument.id;
        }
    }
});
