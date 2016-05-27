Template.vehicles.helpers({
  vehicleList: function() {
    return Vehicles.find();
  },
  context: function() {
			return {
				entity : 'vehicle',
        placeHolder : 'e.g Q3'
			}
	}
});
