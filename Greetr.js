(function(global, $) {
  var Greetr = function(firstName, lastName, language) {
    return new Greetr.init(firstName, lastName, language);
  };

  Greetr.prototype = {};

  Greetr.init = function(firstName, lastName, language) {
    var self = this;
    self.firstName = firstName || "";
    self.lastNAme = lastName || "";
    self.language = language || "en";
  };

  Greetr.init.prototype = Greetr.prototype;

  global.Greetr = global.G$ = Greetr;
})(window, jQuery);

//var g = G$(firstName, lastName, language);
