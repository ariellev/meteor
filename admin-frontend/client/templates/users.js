
Template.users.rendered = function() {
	console.log("Rendered users template");
  //syncUsers();
};

Template.users.helpers({
  userList: function() {
    return Users.find();
  },
  context: function() {
			return {
				entity : 'user',
        placeHolder : 'e.g James'
			}
	}
});
