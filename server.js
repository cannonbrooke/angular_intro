var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));
app.get('/', function(req,res){
  res.render('index.html');
});

app.get('/api', function(req, res, next){
  res.json([
    {title: 'Spectre',
    year: 1999
    },

    {title: 'GODZILLA',
    year: 2000

    },
    {title: 'Pulp Fiction',
    year: 1994

    }

    ]);
});

var server = app.listen(8080);
