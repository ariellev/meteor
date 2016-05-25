Template.registerHelper('formatTime', function(time,type) {

  switch (type) {
    case 'fromNow': return moment.utc(time).fromNow();
    case 'iso': return moment.utc(time).toISOString();
    default: return moment.utc(time).format('LL');
  }
});
