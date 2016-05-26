ReactiveTimer = ( function() {
   // Ctor
   function ReactiveTimer() {
     this._dependency = new Tracker.Dependency;
     this._intervalId = null;
   }

   ReactiveTimer.prototype.start = function(interval) {
     console.log('starting=' + interval + 's');
     var _this = this;
     this._intervalId = Meteor.setInterval(function() {
         _this._dependency.changed();
       }, 1000 * interval);
   };

   ReactiveTimer.prototype.stop = function() {
     console.log('stoping');
     Meteor.clearInterval(this._intervalId);
   };

   ReactiveTimer.prototype.tick = function() {
     this._dependency.depend();
   };

   return ReactiveTimer;
 })();
