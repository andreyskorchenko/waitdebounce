export function debounce(callback, ms) {
  var timeoutID = undefined;

  return function() {
    var self = this;
    var args = arguments;

    clearTimeout(timeoutID);

    timeoutID = setTimeout(function() {
      callback.apply(self, args);
    }, ms);
  };
};
