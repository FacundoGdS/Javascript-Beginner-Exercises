var person = {
    name: "John",                //String
    lastname: "Doe",
    age: 35,                     //Number
    gender: "male",
    lucky_numbers: [ 7, 11, 13, 17], //Array
    significant_other: person2   //Object, yes the same variable/object defined after
};

var person2 = {
    name: "Jane",
    lastname: "Doe",
    age: 38,
    gender: "female",
    lucky_numbers: [ 2, 4, 6, 8],
    significant_other: person
};

var family = {
    lastname: "Doe",
    members: [person, person2]   //Array of objects, don't forget to add Jimmy
};

person.lucky_numbers[3] = 33;

let person3 = {};
person3.name = "Jimmy";
person3.lastname = "Doe";
person3.age = 13;
person3.gender = "male";
person3.lucky_numbers = [1, 2, 3, 4];
person3.significant_other= null;

family.members.push(person3);

function addAllFamilyLuckyNumbers(array1) {
    let sum = 0;
    let newArray = [];
    for (let i = 0; i < array1.length; i++) {
        for (let index in array1[i].lucky_numbers) {
            newArray.push(array1[i].lucky_numbers[index]);
        }
    }
    newArray.forEach(element => { sum = sum + element; });
    return sum;
}

// Do not make changes below:
console.log(addAllFamilyLuckyNumbers(family.members)); 
