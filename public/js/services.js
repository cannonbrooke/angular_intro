(function (){
  angular
    .module('myApp')
    .service('BookService', function(){
      var books = [
      { title:'Ready Player One', author: 'Earnest Something'},
      { title:'Harry Potter', author: 'J.K. Something'},
      { title: 'Neuromancer', author: 'William Something'}
      ];

      this.getBooks = function() {
        return books;
      };

      this.getBook = function(index){
        if (index < 0 || index >= books.length){
          return null;
        }

        return books[index];

      };
        this.addBook = function (title, author){
          books.push( {title: title, author: author});
        return books;
      };
    });
})();
