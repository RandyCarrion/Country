const Randy = require('./json-file-reader');
var proces = process.argv[2] // console.log(countryData) // do something with the data within the function
var func3 = function(X) {
    for (var i = 0; i < X.length; i++) {
        if (proces == X[i].name) { //same as line 4..
            console.log(X[i].name)
            console.log(X[i].topLevelDomain)

        }
    }
}

Randy.read("countries.json", func3)

// findCountry("Dominican Republic") //if logging from the terminal, use line 2 var...