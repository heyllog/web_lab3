const object1 = {
    name: 'Boris',
    weight: 15
};

const object2 = {
    name: 'Boris',
    weight: 15
};

const object3 = {
    name: 'Rex',
    weight: 20,
};

// Реализуйте функцию isEquivalent
let isEquivalent = function (object1, object2) {
    if (Object.keys(object1).length !== Object.keys(object2).length) {
        return false;
    }
    for (let key in object1) {
        if (object1[key] !== object2[key]) {
            return false;
        }
    }
    return true;
};

console.log(isEquivalent(object1, object2)); // true
console.log(isEquivalent(object1, object3)); // false