// // when we use var, we can stored only one value at a time..

// //traverse

// // var names =["bhupesh","abhishek","rahul","rajesh"];
// // console.log(names[1]);


// //printing all elements in arrays


// // for(var i=0; i<names.length; i++) {
// // console.log(names[i]);
// // }



// // printing last element

// // console.log(names[names.length-1]); // prints the last element

// // es6

// // for in displays indexes of array elements do

// // for(let elements in names) {
// //     console.log(elements);
// // }

// // for of loop 

// // for(let elements of names) {
// //     console.log(elements);
// // }

// // array.prototype.forEach()
// //calls a function for each element in the array.

// var friends = ['bhupesh','dhapola','ranbeer','siddharth','hrithik'];
// // friends.forEach(function(element, index, array){
// //     console.log(element + " index : "+ index + " " + array);  
// // });

// // friends.forEach((element, index, array) => {
// //     console.log(element + " index : "+ index + " " + array);  
// // });
// // ******** searching and filter in an array************

// //indexOf()
// // returns the first index of an element within in the array 
// var friends = ['bhupesh','dhapola','tutorial','notes']
// // console.log(friends.indexOf("dhapola",));
// console.log(friends.indexOf("dhapola",1));

// //lastIndexOf()
// // backward search

// console.log(friends.lastIndexOf("dhapola"));

// //includes()
// // shows boolean value true or false if element is present in the array 

// console.log(friends.includes("dhapola"));

// find()
// returns only first value that it get while searching and stops

// const prices = [200,300,500,700,600,150,350,400]
// display price whole price is less than 400
// price<400

// const findElem = prices.find((currValue) => {
//     return currValue<400;
// });
// console.log(findElem);

// console.log(prices.find((currValue) => currValue < 400));

// findIndex()
// console.log(prices.findIndex((currValue) => currValue > 1400));


// if find() and findIndex() both doesnt satisfy the value then they return undefined and -1

// filter()

// returns a new array containing all Elements of the calling array for which the provided filtering function returns true
// const prices = [200,300,500,700,600,150,350,400]

// const newPricetag = prices.filter((element, index)=>{
//     // return element<400;
//     return element>1400  //return empty array

// })
// console.log(newPricetag );




// *****************Sorting in array**********


//sort()
// the sort() method sorts the elements of an array in place and returns the sorted array. the default sort order is ascending, built upon converting the elements into strings then comparing their sequences of UTF-16 code units values.
// alphabhet wise sorting happens in asending order..

// const months= ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// console.log(months.sort()); 

// const array1 = [1,4,40000,700,8,99];
// console.log(array1.sort());

//however if numbers are sorted as strings "25" is bigger than "100" because "2" is bigger than "1".

// because of this, the sort() method will produce an incorrect result when sorting numbers



// *************CRUD in Array***********
// create read update delete

// push()

// push() method adds one or more elements to the end of an array and returns the new length of  the array


// const animals = ['cat', 'dog','rabbit','horze']
// // animals.push('tiger');
// // console.log(animals); 

// animals.push('chicken','cow','sheep'); // can also add mpre than 1
// console.log(animals); 

//unshift()

const animalzzz = ['cat', 'dog', 'rabbit', 'horze'];
const count = animals.unshift('cow');
console.log(count);
console.log(animalzzz);