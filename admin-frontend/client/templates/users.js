Session.setDefault('query', '');
Session.setDefault('displaySearchInput', false);

Template.users.helpers({
  userList: function() {
    return Users.find();
  }
});

Template.users.events({
    'click #search' : function(e, template) {
      console.log('search was clicked');
      if (!Session.get('displaySearchInput')) {
        Session.set('displaySearchInput', true);
        $('#searchInput').css({
          display : 'inline',
          width: '20em'
        });
      } else {
        Session.set('displaySearchInput', false);
        $('#searchInput').css({
          display : 'none',
          width: 0
        });
      }
    },

    'keyup #searchInput': function(e, template) {
        //e.preventDefault();
        console.log('searchInput was clicked, q=' + e.target.value);
        Session.set('query', e.target.value);
        // var form = e.target;
        // var user = Meteor.user();
        // var slug = _.slugify(form.title.value);
        // var _this = this;
        //
        // // calling method
        // Meteor.call('insertPost', {
        //   title: form.title.value,
        //   slug: slug,
        //   description: form.description.value,
        //   text: form.text.value
        // }, function(error, slug) {
        //
        //   Session.set('saveButton', 'Save post');
        //
        //   if (error) {
        //       alert(error.reason);
        //   } else {
        //       // redirect
        //       Router.go('Post', {slug: slug});
        //   }
        // });
    }
});
