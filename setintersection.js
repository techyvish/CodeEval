var fs = require("fs");

var runprogram = function ( filename ) {

    var data = fs.readFileSync(filename, "utf8");

    var sets = data.toString().split("\n");

    for ( var k = 0 ; k < sets.length ; k ++ ) {

        var setArray = sets[k].toString().split(";");

        var set1 = [];
        var set2 = [];
        var str1 = setArray[0].toString();
        var str2 = setArray[1].toString();
        //if ( str1.length !== 0 )
        set1 = str1.split(",");


        //if ( str2.length !== 0 )
        set2 = str2.split(",");

        var finalset = [];

        var j = 0;
        if ( Number(set1[0]) < Number(set2[0])) {
            for (var i = 0; i < set1.length; i++) {
                if (Number(set1[i]) == Number(set2[j])) {
                    finalset.push(set1[i]);

                    if (j < set2.length)
                        j++;
                }
            }
        }
        else
        {
            for (var c = 0; c < set2.length; c++) {
                if (Number(set2[c]) == Number(set1[j])) {
                    finalset.push(set2[c]);

                    if (j < set1.length)
                        j++;
                }
            }

        }

        var finallist = "";
        for (var p = 0; p < finalset.length; p++) {
            if (i !== 0)
                finallist += ","
            finallist += finalset[p];
        }

        console.log(finallist);
    }
    console.log("End");
}

//runprogram (process.argv[2]);
runprogram('setintersection.txt');