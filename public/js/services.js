(function (){
  angular
    .module('myApp')
    .service('BookService', function(){
      var books = ['Ready Player One', 'Harry Potter', 'Neuromancer'];

      this.getBooks = function() {
        return books;
      };

      this.getBook = function(index){
        if (index < 0 || index >= books.length){
          return null;
        }

        return books[index];

      };
    });
})();
