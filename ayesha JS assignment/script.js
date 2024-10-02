// Q1

// var firstName = prompt("Enter your first name!"), lastName = prompt("Enter your last name!");
// alert(`Welcome ${firstName +  lastName}`);

// Q2

// var favoriteModel = prompt("Write your favorite mobile phone model!");
// document.write(`My favorite phone is: ${favoriteModel} <br>`);
// document.write(`length of string: ${favoriteModel.length}`);

// Q3

// var str = "Pakistani",
// input = prompt("Find the index of letter in " + str  ),
// indexNum = str.indexOf(input);

// console.log(`index of ${input} is ${indexNum} `);


// Q4

// var str = "Hello World",input = prompt( `Find the last index of any letter in '${str}' `);

// document.write(`String: ${str} <br>`);
// document.write(`last index of  ${input} : ${str.lastIndexOf(input)}`);


// Q5

// var str = "Pakistani",input = prompt( `Find the character at any letter in '${str}' `);

// document.write(`String: ${str} <br>`);
// document.write(`Character at index  ${input} : ${str.charAt(input)}`);




var input = prompt("Enter any number");


for(i = 1 ; i<= 10;i++){
    document.write(`${input} x ${i} = ${input*i} <br>`)
}