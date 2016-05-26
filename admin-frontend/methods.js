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
            return vehicleDocument.id;
        }
    }
});
