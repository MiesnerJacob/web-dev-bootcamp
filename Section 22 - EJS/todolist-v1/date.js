//jshint esversion:6

exports.getDate = function() {

  const options = {
    weekday: "short",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  let day = new Date().toLocaleString("en-US", options);

  return day;
};


exports.getDay = function() {

  const options = {
    weekday: "short",
  };

  let day = new Date().toLocaleString("en-US", options);

  return day;
};
