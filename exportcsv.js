 app.get('/export', function(req, res)
    {
        var spawn = require('child_process').spawn,
        ls = spawn('mongoexport',['--db','monopoly','--collection','newYork']);
        res.sendfile('/home/database.csv') 

    });