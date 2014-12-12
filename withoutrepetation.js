/**
 * Created by Vishal on 12/12/14.
 */

var fs = require("fs");

var runprogram = function ( filename ) {

    var data = fs.readFileSync(filename, "utf8");

    var str = "";
    for (var i = 0; i < data.length ; i++ )
    {
        if ( i < data.length )
        {
            str += data[i];
            while (data[i] == data[i+1])
            {
                i++;
            }

        }
    }

    console.log(str);
}

runprogram (process.argv[2]);
//runprogram ('withoutrepetation.txt');