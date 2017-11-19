var moment = require('moment');

// Jan 1st 1970 00:00:00 am

var date = moment();
date.add(1000, 'year').subtract(14, 'months');
console.log(date.format('MMM YYYY'));

var date2 = moment(1235);
console.log(date2.format('h:mm'));

var someTimestamp = moment().valueOf();
console.log(someTimestamp);