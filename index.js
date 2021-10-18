let moment = require('moment'); // require

function timeToNow([year,moute,day]){
    return moment([year,moute-1,day]).toNow(true)
}

function timeFromAToB(dateA,dateB){
    dateB = moment(dateB)
    dateA = moment(dateA)
    return dateA.to(dateB)
}

function daysInMonth(date, format){
    return moment(date,format).daysInMonth();
}

daysInMonth("02-2024","MM-YYYY") //return 29