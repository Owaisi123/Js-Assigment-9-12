// QNO1:
document.write("<h1>"+"QNO:1"+"</h1>")
let city = prompt("Enter your city name:");
let city1="karachi";

// Check if the entered city is Karachi
if (city == city1) {
    document.write("Welcome to city of lights!");
}else if(city != city1){
    document.write("Your are not from karachi")
}


// QNO:2:
document.write("<h1>"+"QNO:2"+"</h1>");
let gender = prompt("Enter your gender (male/female):").toLowerCase();

// Check the entered gender and display the appropriate greeting
if (gender === "male") {
    document.write("Good morning, Sir!");
} else if (gender === "female") {
    document.write("Good morning, Ma'am!");
} 


// QNO:3:
document.write("<h1>"+"QNO:3"+"</h1>");
let color = prompt("Enter the traffic light color (red/yellow/green):").toLowerCase();

        // Check the entered color and display the appropriate message
        if (color === "red") {
            document.write("Red Light: Stop.");
        } else if (color === "yellow") {
            document.write("Yellow Light: Prepare to stop.");
        } else if (color === "green") {
            document.write("Green Light: Go.");
        }


        // QNO:3:
document.write("<h1>"+"QNO:3"+"</h1>");
let fuelLevel =(prompt("Enter the current fuel level in liters:"));

// Check if the entered fuel level is less than 0.25 liters
if (fuelLevel < 0.25) {
    document.write("Please refill the fuel in your car.");
}


        // QNO:3:
        document.write("<h1>"+"QNO:3"+"</h1>");
        document.write("<h1>"+"A:"+"</h1>");
        var a = 4;
if (++a === 5) {
    alert("given condition for variable a is true");
}
document.write("<h1>"+"B:"+"</h1>");
var b = 82;
if (b++ === 83) {
    alert("given condition for variable b is true"+"<br><br>");
}
document.write("<h1>"+"C:"+"</h1>");
var c = 12;
if (c++ === 13) {
    alert("given condition 1 is true");
    document.write("given condition 1 is true"+"<br><br>");
}
if (c === 13){
    alert("condition 2 is true");
    document.write("given condition 2 is true"+"<br><br>");

} 
if (++c < 14) {
    alert("condition 3 is true"); 
    document.write("given condition 3 is true"+"<br><br>");

}
if (c === 14) {
    alert("condition 4 is true");
    document.write("given condition 4 is true"+"<br><br>");

}

document.write("<h1>"+"D:"+"</h1>");

var materialCost=20000;
var laborCost=2000;
var totalCost=materialCost+laborCost;
document.write(totalCost+"<br>");
if (totalCost === laborCost+materialCost) {
    document.write("The cost equals"+"<br><br>")
} 

document.write("<h1>"+"E:"+"</h1>");
var message0=prompt("what is your age?");
var message=true;
var message1=false;
 if (message0 == 18) {
    document.write(message)
 }else if (message0 != 18){
    document.write(message1)
 }

 document.write("<h1>"+"F:"+"</h1>");
 var animal="cat";
 var thing="car";
 if (thing < animal) {
    document.write("Car is smaller than cat")
 } 


// QNO:6:
document.write("<h1>" + "QNO:6;" + "</h1>" + "<br>");

let subject1 = parseFloat(prompt("Enter marks for Subject 1:"));
let subject2 = parseFloat(prompt("Enter marks for Subject 2:"));
let subject3 = parseFloat(prompt("Enter marks for Subject 3:"));

// Calculate the total marks and percentage
let totalMarks = subject1 + subject2 + subject3;
let percentage = (totalMarks / 300) * 100; // Assuming each subject is out of 100

// Determine the grade and remarks based on the percentage
let grade;
let remarks;

if (percentage >= 90) {
    grade = "A";
    remarks = "Excellent";
} else if (percentage >= 80) {
    grade = "B";
    remarks = "Very Good";
} else if (percentage >= 70) {
    grade = "C";
    remarks = "Good";
} else if (percentage >= 60) {
    grade = "D";
    remarks = "Average";
} else {
    grade = "F";
    remarks = "Needs Improvement";
}

// Display the results
document.write("<h2>Marksheet</h2>");
document.write("Marks in Subject 1: " + subject1 + "<br>");
document.write("Marks in Subject 2: " + subject2 + "<br>");
document.write("Marks in Subject 3: " + subject3 + "<br>");
document.write("Total Marks: " + totalMarks + "<br>");
document.write("Percentage: " + percentage.toFixed(2) + "%<br>");
document.write("Grade: " + grade + "<br>");
document.write("Remarks: " + remarks + "<br>");


// QNO:7:
document.write("<h1>" + "QNO:7;" + "</h1>" + "<br>");

const secretNumber = parseInt(Math.random() * 10) + 1;

const userGuess = parseInt(prompt("Guess the secret number between 1 and 10:"), 10);

if (userGuess === secretNumber) {
    document.write("Correct answer! The secret number was " + secretNumber + ".<br>");
} else if (userGuess === secretNumber - 1 || userGuess === secretNumber + 1) {
    document.write("Close enough to the correct answer! The secret number was " + secretNumber + ".<br>");
} else {
    document.write("Try again! The secret number was " + secretNumber + ".<br>");
}







// QNO:8:
document.write("<h1>" + "QNO:8;" + "</h1>" + "<br>");

var number = prompt('Enter a number:');
number = parseInt(number);
if (number % 3 === 0) {
    alert('The number ' + number + ' is divisible by 3.');
} else {
    alert('The number ' + number + ' is not divisible by 3.');
}


// QNO:9:
document.write("<h1>" + "QNO:9;" + "</h1>" + "<br>");
var number = prompt('Enter a number:');
number = parseInt(number);
if (number % 2 === 0) {
    alert('The number ' + number + ' is even.');
} else {
    alert('The number ' + number + ' is odd.');
}




// QNO:10:
document.write("<h1>" + "QNO:10;" + "</h1>" + "<br>");
var num1 =+prompt("Enter first value?");
var num2 =+prompt("Enter second value?");
var operator = prompt("Choose operator");

if (operator == "+") {
    var result=num1+num2;
  alert(result);
} else if (operator == "-") {
    var result=num1-num2;
  alert(result);}
 else if (operator == "*"){
    var result=num1*num2;
    alert(result);
}else if(operator == "/"){
    var result=num1/num2;
    alert(result);
}
