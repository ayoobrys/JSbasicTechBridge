let firstName = "Bryson";

let message = "Hello my name is: " + firstName + " and I like dogs";

console.log(message);

let firstName2 = "Allen"

let age = 26;

let message2 = "Hello my name is: " + firstName2 + "I enjoy long walks";

console.log(message2);

let myNumber = 9;

let numberString = myNumber.toString()

let message3 = "My number is " + numberString;

console.log(message3);

const allColors = ["red", "green", "yellow", "blue", "grey", "cyan"]

let favColor = allColors[4]

let message4 = `My favorite color is ${favColor}.`

console.log(message4);

let date = "Wednesday";

if (date == "Monday") {
    console.log("Today is Monday");
}
else if (date == "Tuesday") {
    console.log("Today is Tuesday");
}
else if (date == "Wednesday") {
    console.log("Today is Wednesday");
}
else if (date == "Thursday") {
    console.log("Today is Thursday");
}
else if (date == "Friday") {
    console.log("Today is Friday");
}

let i = 0;

while (i < 10) {
    console.log(i);
    i++;
}