Session.setDefault('query', '');
Session.setDefault('displaySearchInput', false);

Template.actionBar.rendered = function() {
	console.log("Rendered action bar template");
  Session.set('displaySearchInput', false);
  Session.set('query', '');
};

Template.actionBar.events({
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
        Session.set('query', e.target.value);
        console.log('searchInput was clicked, q=' + Session.get('query'));
    }
});
