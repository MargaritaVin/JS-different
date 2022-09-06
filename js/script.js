"use strict";

const keyValue = JSON.parse(localStorage.getItem("User"));
if (keyValue === null) {
    fetch('https://jsonplaceholder.typicode.com/users/1')
    .then((response) => response.json())
    .then((result) => {
        let user = result;
        localStorage.setItem("User", JSON.stringify(user));
    })
    .catch((error) => console.log(error));
};
console.log(keyValue);

function isValidDateFormat(str) {
    const strDate = str;
    const regexp = /^\d{4}\/\d{2}\/\d{2}\s\d{2}:\d{2}$/;
    return regexp.test(strDate);
};
console.log(isValidDateFormat("2012/09/18 12:10")); 
console.log(isValidDateFormat("12.02.2022 12:10")); 

function isAfter(startDate, endDate) {
    return startDate > endDate;
};
console.log(isAfter(new Date(1989, 6, 10), new Date(1987, 1, 11))); 
console.log(isAfter(1648636135000, 1648549735000)); 
console.log(isAfter(1648549735000, 1648636135000)); 