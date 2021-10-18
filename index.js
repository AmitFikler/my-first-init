let moment = require('moment'); // require

function timeToNow([year,month,day]){
    return moment([year,month-1,day]).toNow(true)
}
timeToNow([1999,06,25]) //return 22 years

function timeFromAToB(dateA,dateB){
    dateB = moment(dateB)
    dateA = moment(dateA)
    return dateA.to(dateB)
}

timeFromAToB([2021,10,10],[2021,10,18]) // in 8 days

function daysInMonth(date, format){
    return moment(date,format).daysInMonth();
}

daysInMonth("02-2024","MM-YYYY") //return 29