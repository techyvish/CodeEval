/**
 * Created by Vishal on 12/12/14.
 */

var fs = require("fs");

var runprogram = function ( filename ) {

    var data = fs.readFileSync(filename, "utf8");

    var dataArray = data.split("\n");

    for (var i = 0; i < dataArray.length ; i++ )
    {
        var str = dataArray[i];
        if ( str.length > 55 )
        {
            var newstr = str.substr(0,37).trim();
            console.log(newstr + "...\<Read More>");
        }
        else
        {
            console.log(str);
        }

    }

    console.log(str);
}

//runprogram (process.argv[2]);
runprogram ('trimline.txt');