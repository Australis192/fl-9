// 1

function findType(param) {
    return typeof param;
}

// 2

function forEach(array, fnc) {
    for (let i = 0; i < array.length; i++) {
        fnc(array[i]);
    }
}

// 3

function map(array, fnc) {
    let newArray = [];
    forEach(array, function (el) {
        newArray.push(fnc(el));
    });
    return newArray;
}

// 4

function filter(array, fnc) {
    let filtered = [];
    forEach(array, function (el) {
        if (fnc(el)) {
            filtered.push(el);
        }
    });
    return filtered;
}

// 5

function getAdultAppleLovers(input) {
    return map(filter(input, function (el) {
        return el.favoriteFruit === 'apple' && el.age > 18;
    }),
        function (el) {
            return el.name;
        });
}

// 6

function keys(array) {
    let newArray = [];
    for (let key in array) {
        if (array.hasOwnProperty(key)) {
            newArray.push(key);
        }
    }
    return newArray;
}

// 7

function values(array) {
    let newArray = [];
    for (let key in array) {
        if (array.hasOwnProperty(key)) {
            newArray.push(array[key]);
        }
    }
    return newArray;
}

// 8

function showFormattedDate(date) {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `It is ${date.getDate()} of ${months[date.getMonth()]}, ${date.getFullYear()}`;
}




