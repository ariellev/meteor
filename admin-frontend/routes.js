if (Meteor.isClient) {
  Session.setDefault('total', 10);
  Session.setDefault('query', "");
};

Router.configure({
  layoutTemplate: 'layout',
  notFoundTemplate: 'notFound',
  loadingTemplate: 'loading'
});

// PostController = RouteController.extend({
//   waitOn : function() { return Meteor.subscribe('single-post', this.params.slug) },
//   data: function() { return Posts.findOne({slug: this.params.slug})}
// });

Router.map(function() {
  this.route('Vehicles', {
    path: '/',
    template: 'vehicles',
    subscriptions: () => { Meteor.subscribe('lazy-vehicles', Session.get('total')) }
  });

  this.route('Users', {
    path: '/users',
    template: 'users',
    subscriptions: () => { Meteor.subscribe('search-users', Session.get('query'), Session.get('total')) }
  });

  this.route('Insert User', {
    path: '/insert-user',
    template: 'insertUser'
  });

  this.route('Insert Vehicle', {
    path: '/insert-vehicle',
    template: 'insertVehicle'
  });

});


//   this.route('About', {
//     path: '/about',
//     template: 'about'
//   });
//
//   this.route('Post', {
//     path: '/posts/:slug',
//     template: 'post',
//     controller: 'PostController'
//   });
//
//   this.route('Edit Post', {
//     path: '/edit-post/:slug',
//     template: 'editPost',
//     controller: 'PostController'
//   });
//
//   this.route('Create Post', {
//     path: '/create-post',
//     template: 'editPost'
//   });
//
// });
//
// var requiresLogin = function() {
//   if (!Meteor.user() || !Meteor.user().roles || !Meteor.user().roles.admin) {
//     this.render('notFound');
//   } else {
//     this.next();
//   }
// };
//
// Router.onBeforeAction(requiresLogin, {only: ['Create Post', 'Edit Post']});
