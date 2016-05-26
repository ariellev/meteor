Meteor.methods({
    insertUser: function(userDocument) {
        if (this.isSimulation) {
            // client stub
            Session.set('saveButton', 'Saving...');
        } else {
            var ids = Users.find({}, { id: 1}).fetch().map( (u) => u.id);
            console.log("ids=" + ids);
            var max = _.max(ids) + 1;
            userDocument.id = max;
            Users.insert(userDocument);
            return userDocument.id;
        }
    },

    insertVehicle: function(vehicleDocument) {
        if (this.isSimulation) {
            // client stub
            Session.set('saveButton', 'Saving...');
        } else {
            var ids = Vehicles.find({}, { id: 1}).fetch().map( (u) => u.id);
            console.log("ids=" + ids);
            var max = _.max(ids) + 1;
            vehicleDocument.id = max;
            Vehicles.insert(vehicleDocument);

            // posting to backend
            var payload = {data: vehicleDocument};
            Meteor.http.call("PUT", "http://localhost:8080/api/v1/vehicles/save", payload, (e,d) => console.log(d));
            return vehicleDocument.id;
        }
    }
});
