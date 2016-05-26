 Session.setDefault('saveButton', 'Submit');

Template.insertVehicle.helpers({
    saveButtonText : function () {return Session.get('saveButton');}
});

Template.insertVehicle.events({
    'submit form': function(e, template) {
        e.preventDefault();
        console.log('Inserting vehicle');
        var form = e.target;
        var _this = this;

        // calling method
        Meteor.call('insertVehicle', {
          licensePlate: form.licensePlate.value,
          vin: form.vin.value,
          model: form.model.value,
          active: form.active.value,
          color: form.color.value,
          validTill: form.validTill.value
        }, function(error, data) {

          Session.set('saveButton', 'Submit');
          if (error) {
              alert(error.reason);
          } else {
              // redirect
              Router.go('/');
          }
        });
    }
});
