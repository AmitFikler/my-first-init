let moment = require('moment'); // require
// console.log(moment().format()); //Today
function timeToNow([year,moute,day]){
    return moment([year,moute-1,day]).toNow(true)
}

function timeFromAToB(dateA,dateB){
    dateB = moment(dateB)
    dateA = moment(dateA)
    return dateA.to(dateB)
}