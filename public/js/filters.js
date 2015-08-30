(function (){
  angular
    .module('myApp')
    .filter('beforeYearFilter', function(){
      return function (movie, year){
        return movie.filter(function(movie){
          return movie.year < year;
        });
      };
    });
})();