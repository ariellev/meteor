Template.users.helpers({
  userList: function() {
    return Users.find();
  }
});

Template.users.events({
    'submit form': function(e, template) {
        e.preventDefault();
        console.log('Post saved');
        var form = e.target;
        var user = Meteor.user();
        var slug = _.slugify(form.title.value);
        var _this = this;

        // calling method
        Meteor.call('insertPost', {
          title: form.title.value,
          slug: slug,
          description: form.description.value,
          text: form.text.value
        }, function(error, slug) {

          Session.set('saveButton', 'Save post');

          if (error) {
              alert(error.reason);
          } else {
              // redirect
              Router.go('Post', {slug: slug});
          }
        });
    }
});
