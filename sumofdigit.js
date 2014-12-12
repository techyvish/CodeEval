/**
 * Created by Vishal on 12/12/14.
 */

var fs = require("fs");

var runprogram = function ( filename ) {

    var data = fs.readFileSync(filename, "utf8");
    var array = data.toString().split("\n");

    var sum = 0;
    for ( var i  = 0 ; i < array.length ; i ++ )
    {
        var n = Number(array[i]);
        var sum = 0 ;
        while (n != 0 )
        {
            var digit = n % 10 ;
            sum += digit;
            n = Math.floor( n / 10 ) ;
        }
        console.log(sum);
    }


}

runprogram (process.argv[2]);
//runprogram ('sumofdigit.txt');