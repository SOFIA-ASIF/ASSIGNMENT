"use strict";
//question 01
//Done
// question 02
let name1 = "SOFIA";
console.log("Hello " + name1 + ", would you like to learn some Python today?");
//question 03
let name2 = "Asif";
console.log("Lower Case: " + name2.toLowerCase());
console.log("Upper Case: " + name2.toUpperCase());
console.log("Title case: " + name2.charAt(0).toUpperCase() + name2.slice(1).toLowerCase());
//question 04
let author = "Albert Einstein";
console.log(author, ' once said, "A person who never made a mistake never tried anything new"');
//question 05
let famous_person = "Albert Einstein";
let quote = '"A person who never made a mistake never tried anything new"';
let message2 = famous_person + " once said, " + quote;
console.log(message2);
//question 06
let NameWithWhiteSpace = " /t /n Sofia Asif /t /n";
console.log("name with white spaces");
console.log(NameWithWhiteSpace);
let strippedName = NameWithWhiteSpace.trim();
console.log("name without white spaces");
console.log(strippedName);
//question 07
console.log(4 + 4);
console.log(10 - 2);
console.log(4 * 2);
console.log(64 / 8);
console.log(89 % 9);
//question 08
console.log(5 + 3);
console.log(5 + 3);
console.log(5 + 3);
console.log(5 + 3);
//question 09
let FavouriteNumbers = 9;
let message1 = `my favourite number is ${FavouriteNumbers}`;
console.log(message1);
//question 10
// Sofia Asif, 05-03-2024
// This program prints the sum of two numbers
console.log(5 + 3);
console.log(5 + 3);
console.log(5 + 3);
console.log(5 + 3);
//question 11
let names1 = ["Mehwish", "Khoula", "Ayesha", "Zoya", "Hafsa"];
console.log("FriendsNames:");
console.log(names1[0]);
console.log(names1[1]);
console.log(names1[2]);
console.log(names1[3]);
console.log(names1[4]);
//question 12
let names = ["Mehwish", "Khoula", "Ayesha", "Zoya", "Hafsa"];
let message = " how are you";
for (let name of names) {
    console.log(`hello ${name}, How are you`);
}
//question 13
let cars = [
    "Toyota Camry",
    "Honda Civic",
    "Ford Mustang",
    "Chevrolet Silverado",
    "Tesla Model",
];
cars.forEach((car) => {
    console.log("My favourite car is", car, "car");
});
//question 14
let GuestNames1 = ["hina", "ammara", "bushra"];
GuestNames1.forEach((Guestname) => {
    console.log("Hey!", Guestname, "I would like to invite you on a dinner at saturday evening");
});
// question 15
let GuestNames2 = ["hina", "sadia", "ammara", "bushra"];
GuestNames2.forEach((Guestname) => {
    console.log(Guestname, " is invited to dinner");
});
let unableToAttend = "hina";
console.log(`but "${unableToAttend}" cant make it to dinner `);
let newguest1 = "hina";
GuestNames2[GuestNames2.indexOf(unableToAttend)] = newguest1;
GuestNames2.forEach((Guestname) => {
    console.log("Hey!", Guestname, "I would like to invite you on a dinner at saturday evening");
});
// question 16
let GuestNames3 = ["hina", "sadia", "ammara", "bushra"];
GuestNames3.forEach((Guestname) => {
    console.log(Guestname, " is invited to dinner");
});
let unableToAttend1 = "hina";
console.log(`but "${unableToAttend1}" cant make it to dinner `);
let newguest2 = "hina";
GuestNames2[GuestNames2.indexOf(unableToAttend1)] = newguest2;
GuestNames2.forEach((Guestname) => {
    console.log("Hey!", Guestname, "I would like to invite you on a dinner at saturday evening");
});
GuestNames3.forEach((Guestname) => {
    console.log("Hey!", Guestname, "Guess what?? I found a big dinner table");
});
let newguest = "umer";
GuestNames3.unshift(newguest);
let indexToAdd = Math.floor(GuestNames3.length / 2);
GuestNames3.splice(indexToAdd, 0, "sofia");
newguest = "sadia";
GuestNames3.push(newguest);
GuestNames3.forEach((Guestname) => {
    console.log("Hey!", Guestname, "I would like to invite you to a dinner");
});
//question 17
console.log("i am sorry but i can invite only two people at a time");
while (GuestNames3.length > 2) {
    let removedGuest = GuestNames3.pop();
    console.log(`sorry ${removedGuest} i can't invite you to dinner today`);
}
console.log("hey!", GuestNames3[0], " you are still invited to dinner");
console.log("hey!", GuestNames3[1], " you are still invited to dinner");
GuestNames3.splice(0, GuestNames3.length);
console.log("Guest list is empty", GuestNames3);
//  question 18
let favouritePlaces = [
    "paris",
    "africa",
    "japan",
    "korea",
    "saudia arabia",
];
console.log("array is", favouritePlaces);
console.log("sorted array", favouritePlaces.slice().sort());
console.log("original array is", favouritePlaces);
console.log("reverse array", favouritePlaces.slice().sort().reverse());
console.log("original array is", favouritePlaces);
console.log("reversed order array", favouritePlaces.reverse());
console.log("again reverse the reversed order array", favouritePlaces.reverse());
console.log("alphabetically order yhr again reverse the reversed order array", favouritePlaces.sort());
console.log("again reverse the reversed order array", favouritePlaces.reverse());
// // question 19
let GuestNames = ["hina", "sadia", "ammara", "bushra"];
console.log(`the number of people that were invited to dinner are ${GuestNames.length}`);
// question 20
let colours = ["blue", "black", "yellow", "orange", "red"];
console.log("my favourite colours are");
colours.forEach((colour) => {
    console.log('clors i like', colour);
});
// question 21
let car1 = {
    brand: "tokyo",
    model: "big",
    year: 2019,
    colour: "red",
};
let car2 = {
    brand: "Honda",
    model: "Civic",
    year: 2021,
    color: "Blue",
};
let car3 = {
    brand: "Ford",
    model: "Mustang",
    year: 2020,
    color: "Yellow",
};
console.log("description of car 1 is", car1);
console.log("description of car 2 is", car2);
console.log("description of car 2 is", car3);
// question 22
let numbers1 = [1, 2, 3, 4, 5];
console.log(numbers1[10]);
console.log(numbers1[2]);
// question 23
let x = 5;
let y = 10;
console.log("Is x == 5? I predict True.");
console.log(x == 5);
console.log("Is y == 10? I predict True.");
console.log(y == 10);
console.log("Is x != 3? I predict True.");
console.log(x != 3);
console.log("Is y != 5? I predict True.");
console.log(y != 5);
console.log("Is x > 3? I predict True.");
console.log(x > 3);
console.log("Is y <= 10? I predict True.");
console.log(y <= 10);
console.log("Is x < 2? I predict False.");
console.log(x < 2);
console.log("Is y > 20? I predict False.");
console.log(y > 20);
console.log("Is x == '5'? I predict False.");
console.log(x == 16);
console.log("Is y == '10'? I predict False.");
console.log(y == 18);
// question 24
console.log("Test for equality with strings: 'apple' == 'Apple'");
console.log("Apple" == "Apple");
console.log("Test for inequality with strin'apple' != 'orange'gs: ");
console.log("apple" != "apple");
console.log("Test using lower case function: 'HELLO'.toLowerCase() == 'hello'");
console.log("HELLO".toLowerCase() == "hello"); // True
console.log("Numerical test for equality: 5 == 5");
console.log(5 == 5); // True
console.log("Numerical test for inequality: 5 != 5");
console.log(5 != 5); // false
console.log("Numerical test for greater than: 10 > 5");
console.log(10 > 5); // True
console.log("Numerical test for less than: 5 < 10");
console.log(5 < 10); // True
console.log("Numerical test for greater than or equal to: 10 >= 10");
console.log(10 >= 10); // True
console.log("Numerical test for less than or equal to: 5 <= 10");
console.log(5 <= 10); // True
console.log("Test using 'and' operator: (5 > 3) && (10 < 20)");
console.log(5 > 3 && 10 < 20); // True
console.log("Test using 'or' operator: (5 < 3) || (10 < 20)");
console.log(5 < 3 || 10 < 20); // True
let fruits1 = ["apple", "banana", "orange"];
console.log("Test whether 'banana' is in the array: fruits.includes('banana')");
console.log(fruits1.includes("banana")); // True
console.log("Test whether 'grape' is not in the array: !fruits.includes('grape')");
console.log(!fruits1.includes("grape")); // True
// question 25
let alien_color1 = "green";
if (alien_color1 == "green") {
    console.log("you have earned 5 points");
}
//another version
if (alien_color1 == "red") {
}
// question 26
let alien_color = "red";
if (alien_color == "green") {
    console.log("you have earned 5 points");
}
if (alien_color != "green") {
    console.log("you have earned 10 points");
}
if (alien_color == "green") {
    console.log("you won the game");
}
else {
    console.log("you lost the game");
}
// question 27
let aliencolor = "red";
if (aliencolor == "green") {
    console.log("you have earned 5 points");
}
else if (aliencolor == "yellow") {
    console.log("you have earned 10 points");
}
else if (aliencolor == "red") {
    console.log("oops :( You lost the game");
    console.log("you have earned 15 points");
}
//question 28
let age = 26;
if (age < 2) {
    console.log("person is a baby");
}
if (age == 2 || age < 4) {
    console.log("person is a toddler");
}
if (age == 4 || age < 13) {
    console.log("person is a kid");
}
if (age == 13 || age < 20) {
    console.log("person is a teenager");
}
if (age == 20 || age < 65) {
    console.log("person is a adult");
}
if (age >= 65) {
    console.log("person is a elder");
}
//question 29
let favourite_fruits = ["cheeko", "tomato", "grapes"];
if (favourite_fruits.includes("cheeko")) {
    console.log("i really like cheeko");
}
if (favourite_fruits.includes("tomato")) {
    console.log("i really like tomato");
}
if (favourite_fruits.includes("grapes")) {
    console.log("i really like grapes");
}
if (favourite_fruits.includes("apple")) {
    console.log("i really like apple");
}
if (favourite_fruits.includes("mango")) {
    console.log("i really like mango");
}
//question 30, 31
let user_name = ["admin", "hania", "wara", "sadia", "umer"];
if (user_name.length === 0) {
    console.log("we neeed to find the users");
}
for (let i = 0; i <= user_name.length; i++) {
    if (user_name[i] == "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log("Hello", user_name[i], "thank you for logging in again");
    }
}
user_name = [];
console.log("we need to find some users");
//question 32
let current_array = ["saad", "abdullah", "ali", "bushra", "hassan"];
let new_users = ["saad", "abdullah", "sadia", "ammara", "sofia"];
current_array = current_array.map((array) => array.toLowerCase());
new_users.forEach((user) => {
    let new_userLowerCase = user.toLowerCase();
    if (current_array.includes(user)) {
        console.log(`${new_userLowerCase} username is already in used`);
    }
    else {
        console.log(`${new_userLowerCase} user name is available`);
    }
});
//question 33
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
numbers.forEach((number) => {
    let ordinalending;
    if (number === 1) {
        ordinalending = "st";
    }
    else if (number === 2) {
        ordinalending = "nd";
    }
    else if (number === 3) {
        ordinalending = "rd";
    }
    else {
        ordinalending = "th";
    }
    console.log(`${number}${ordinalending}`);
});
//question 34
let favourite_pizza = ["pepperoni", "pineapple", "tikka"];
for (let i = 0; i < favourite_pizza.length; i++) {
    let element = favourite_pizza[i];
    console.log(`i like ${favourite_pizza} pizza`);
}
console.log("Pizza, a beloved culinary creation, is a versatile dish enjoyed worldwide. With its combination of dough, sauce, cheese, and toppings, pizza offers a delightful fusion of flavors and textures that satisfies cravings and brings people together. i really love pizza");
//question 35
let favourite_animal = ["cat", "dog", "rabbit"];
for (let j = 0; j < favourite_animal.length; j++) {
    console.log(favourite_animal[j]);
}
for (let i = 0; i < favourite_animal.length; i++) {
    if (favourite_animal[i] === "cat")
        console.log("cats are stubborn");
    else if (favourite_animal[i] === "dog")
        console.log("i love dogs");
    else
        console.log("rabbits eat carrots");
}
console.log("any of these animal make a great pet");
//question 36
function make_T_shirt(size, message) {
    console.log(`the size of the shirt is ${size} and the message is ${message}`);
}
make_T_shirt("large", " i love black color t shirts");
//question 37
function make_T_shirt1(size = "large", message = "i love typescript") {
    console.log(`the size of the shirt is ${size} and the message is ${message}`);
}
make_T_shirt1();
make_T_shirt1("medium");
make_T_shirt1("small", "i love baggy clothes");
//question 38
function describe_city(city, country = "pakistan") {
    console.log(`${city} is in ${country}`);
}
describe_city("Karachi", "Pakistan");
describe_city("Pakistan", "France");
describe_city("karachi");
//question 39
function city_country(city, country) {
    return `${city} , ${country}`;
}
console.log(city_country("karachi", "pakistan"));
console.log(city_country("tokyo", "japan"));
console.log(city_country("morocco", "morocco"));
// //question 40
function makeAlbum(artist, title, tracks) {
    const album = {
        artist,
        title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
const album1 = makeAlbum("Artist 1", "Album 1");
const album2 = makeAlbum("Artist 2", "Album 2", 12);
const album3 = makeAlbum("Artist 3", "Album 3");
console.log(album1);
console.log(album2);
console.log(album3);
//question 41, 42
function show_magicians(magicians) {
    magicians.forEach((magician) => {
        console.log(magician);
    });
}
function makegreat(magicians) {
    return magicians.map((magician) => `the great ${magician}`);
}
let magicians = [
    "David Copperfield",
    "Harry Houdini",
    "Penn Jillette",
    "Teller",
];
show_magicians(magicians);
let great_magicians = makegreat(magicians);
console.log("The Great Magicians:");
show_magicians(great_magicians);
//question 43
function show_magicians1(magicians1) {
    magicians1.forEach((magician1) => {
        console.log(magician1);
    });
}
function make_great(magicians1) {
    return magicians1.map((magician1) => `the great ${magician1}`);
}
let magicians1 = [
    "David Copperfield",
    "Harry Houdini",
    "Penn Jillette",
    "Teller",
];
let greatmagicians = make_great([
    "David Copperfield",
    "Harry Houdini",
    "Penn Jillette",
    "Teller",
]);
console.log("original magicians");
show_magicians1(magicians1);
console.log("\nGreat magicians");
show_magicians1(greatmagicians);
//question 44
function makesandwich(...items) {
    console.log("your sandwich includes");
    if (items.length === 0) {
        console.log("oops :( your sandwich is empty");
    }
    else {
        items.forEach((item) => {
            console.log(item);
        });
    }
    console.log();
}
makesandwich("potato", "tomato", "carrot", "cucumber");
makesandwich("lettucs", "cucumber");
makesandwich();
//question 45
function make_car(manufacturer, model, ...options) {
    let car = { manufacturer, model };
    options.forEach(([key, value]) => car[key] = value);
    return car;
}
console.log(make_car("Toyota", "Corolla", ["color", "red"], ["year", 2020]));
console.log(make_car("Ford", "Fiesta", ["color", "blue"], ["sunroof", true]));
