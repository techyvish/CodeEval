var fs = require("fs");

var runprogram = function ( filename ) {

    var data = fs.readFileSync(filename, "utf8");

    var sets = data.toString().split("\n");

    for ( var i = 0 ; i < sets.length ; i ++ ) {

        var setArray = sets[i].toString().split(";");

        var set1 = setArray[0].toString().split(",");
        var set2 = setArray[1].toString().split(",");

        var finalset = [];

        var j = 0;
        for (var i = 0; i < set1.length; i++) {
            if (Number(set1[i]) == Number(set2[j]) ) {
                finalset.push(set1[i]);

                if ( j < set2.length )
                    j++;
            }
        }

        var finallist = "";
        for (var i = 0; i < finalset.length; i++) {
            if (i != 0)
                finallist += ","
            finallist += finalset[i];
        }

        console.log(finallist + "\n");
    }

}

//runprogram (process.argv[2]);
runprogram ('setintersection.txt');