var fs = require('fs');

module.exports = {
        read: function (fileName, callBack) {


                fs.readFile(fileName, function(err, data) { //function to read the file btwn ''
                            if (err) 
                                throw err;
                            

                            var ABC = JSON.parse(data)

                            callBack(ABC) //this is the anonymous function
                            //             // console.log(countryData) // do something with the data within the function
                            //             callBack(err, ABC)
                            // 
                        })
            }
        }

//this module exports is created in order to read the function 