 Session.setDefault('saveButton', 'Submit');

Template.insertUser.helpers({
    saveButtonText : function () {return Session.get('saveButton');}
});

Template.insertUser.events({
    'submit form': function(e, template) {
        e.preventDefault();
        console.log('Insert user');
        var form = e.target;
        //var slug = _.slugify(form.title.value);
        var _this = this;

        // calling method
        Meteor.call('insertUser', {
          firstName: form.firstName.value,
          lastName: form.lastName.value,
          email: form.email.value,
          birthday: form.birthday.value
        }, function(error, data) {

          Session.set('saveButton', 'Submit');
          if (error) {
              alert(error.reason);
          } else {
              // redirect
              Router.go('/users');
          }
        });
    }
});
