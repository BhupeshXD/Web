// ************Strings in Javascript************

// A javascript string is zero or more characters written inside quotes.

// javascript strings are used for storing and manipulating text.
// You can use single or double quotes

// Strings can be created as primitive, from string literals, or as objects, using the String() constructor

// let myName= "Bhupesh Dhapola";
// let myChannel= "Dhapola";

// // ********* let ytname = new  String ('BD Thechnicals');    // exceptional is the interviewer asks you to make string  from string constructor  ********

// console.log(myName);
// console.log(ytname);


// ********How to find the length of a string********
// String.prototype.length
// reflects the length of a string

// let myName = 'Bhupesh Dhapola'  // in string space is also been counted
// console.log(myName.length);



// Escape Character

// let anySentence = "We are so called \"Vikings\" from the north...";
// console.log(anySentence);

// // if you dont want to mess, simply use the alertnate quotes

// let anySentencez = 'We are so called "Vikings" from the north...';
// console.log(anySentence);

// ************* Finding a string is a string ***************

// indexOf() method

// String.prototype.indexOf = (searchvalue [, fromIndex])

// The indexOf() method returns the index of the ( the position of ) the first occurrence of a specified text in a string

// const myBioData = "I am the Bhupesh Dhapola";
// // console.log(myBioData.indexOf("dhapola"));
// // if data is not present or couldnt find than it will return -1
// console.log(myBioData.indexOf("Bhupesh"));

// console.log(myBioData.indexOf("p",2));  // 2 is from where it will start the searching process



// lastindexOf() method

// String.prototype.lastIndexOf(searchvalue[, fromIndex])

