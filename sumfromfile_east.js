
    var fs = require("fs");

    var runprogram = function ( filename ) {

        var data = fs.readFileSync(filename, "utf8");
        var array = data.toString().split("\n");

        var sum = 0;
        for ( var i  = 0 ; i < array.length ; i ++ )
        {
            sum += Number(array[i]);
        }
        console.log(sum);

    }

    runprogram (process.argv[2]);