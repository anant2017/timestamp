var express = require('express');
var bodyparser = require('body-parser')
var app = express();

app.use(bodyparser.urlencoded({extended:false}));

app.get("/*", function (req,res)
{
    var dateTime = decodeURI(req.url.substring(1));
    
    var dateObj;
    console.log(dateTime);
    if(isNaN(dateTime)){
        var naturalDate = new Date(dateTime);
        console.log(naturalDate);
        if(naturalDate=="Invalid Date")
        {
             dateObj = {"unix":null, "natural":null};
        }
        else {
            var unixTime = Math.round(new Date().getTime()/1000);
            dateObj = {"unix":unixTime, "natural":dateTime};
        }
        
        res.end(JSON.stringify(dateObj));
        console.log(JSON.stringify(dateObj));
    }
    else{
        var unixTimeStamp = req.url.substring(1);
        console.log(unixTimeStamp);
        var naturalDate = new Date(parseInt(unixTimeStamp));
        if(naturalDate=="Invalid Date")
        {
            dateObj = {"unix":null, "natural":null};
        }
        else
        {
            dateObj = {"unix":unixTimeStamp, "natural":naturalDate.toDateString()};
        }
        console.log(naturalDate);

        res.end(JSON.stringify(dateObj));
        console.log(JSON.stringify(dateObj));
    }
    
}
).listen(3000);
console.log("listening on 3000...")