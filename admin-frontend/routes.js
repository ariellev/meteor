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
    subscriptions: () => { Meteor.subscribe('search-vehicles', Session.get('query'), Session.get('total')) }
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

// var resetSession = function() {
//   console.log('hook-resetSession');
//
//   this.next();
// };
//
// Router.onBeforeAction(resetSession, {only: ['Vehicles', 'Users']});
