// when we use var, we can stored only one value at a time..

//traverse

var names =["bhupesh","abhishek","rahul","rajesh"];
// console.log(names[1]);


//printing all elements in arrays


// for(var i=0; i<names.length; i++) {
// console.log(names[i]);
// }



// printing last element

console.log(names[names.length-1]); // prints the last element

// es6

// for in displays indexes of array elements do

// for(let elements in names) {
//     console.log(elements);
// }

// for of loop 

for(let elements of names) {
    console.log(elements);
}


