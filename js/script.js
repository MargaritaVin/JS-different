"use strict";

const getUser = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
        if (!response.ok) {
          throw new Error("Error: not found");
        }
        const data = await response.json();
        localStorage.setItem("User", JSON.stringify(data));
        console.log(JSON.parse(localStorage.getItem("User")));
    } catch (err) {
        console.error(err.message);
    }
};
getUser();

function isValidDateFormat(str) {
    const strDate = str;
    const regexp = /^\d\d\d\d\/\d\d\/\d\d\s\d\d:\d\d$/;
    return regexp.test(strDate);
};
console.log(isValidDateFormat("2012/09/18 12:10")); 
console.log(isValidDateFormat("12.02.2022 12:10")); 

function isAfter(start, end) {
    const startDate = start;
    const endDate = end;
    return startDate > endDate;
};
console.log(isAfter(new Date(1989, 6, 10), new Date(1987, 1, 11))); 
console.log(isAfter(1648636135000, 1648549735000)); 
console.log(isAfter(1648549735000, 1648636135000)); 