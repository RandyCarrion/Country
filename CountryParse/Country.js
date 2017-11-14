const fs = require('fs');
//var proces = process.argv[2] //this logs it in the terminal, process.argv logs the terminal input

function findCountry(Country){ //this is easier to write as you can just call the function later and have an input for the parameter 

fs.readFile('countries.json', function(err, data) { //function to read the file btwn ''
    if (err) {
        throw err;
    } //this is standard, just in case an error pops up

    var ABC = JSON.parse(data) // do something with the data within the function
    // console.log(countryData) 

    for (var i = 0; i < ABC.length; i++) { //loops through the whole ABC data file
    	if(ABC[i].name == Country){ //'Country' same as line 4..
    		console.log(ABC[i].name)
    		console.log(ABC[i].topLevelDomain)

    	}
        //you call the var country on top and if its the same , stop the loop 

    } 
})
}

findCountry("Dominican Republic")  //if logging from the terminal, use line 2 var...