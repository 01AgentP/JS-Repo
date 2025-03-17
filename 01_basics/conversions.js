let score = "33"

// two methods to check datatype

console.log(typeof score);
console.log(typeof (score));

 // We are converting anything into number here 

let valueinnumber = Number(score)
console.log(valueinnumber);

// Now we have changed Number into string but still when we will check datatype it will show Number and when to ask print it will show NaN

score = NaN
valueinnumber = Number(score)
console.log(typeof valueinnumber);
console.log(valueinnumber);


// "33" => 33
// "33abc", undefined, NaN => NaN
// true => 1; false, null => 0


// Conversion to boolean

isLoggedIn = NaN

let boolean = Boolean(isLoggedIn)
console.log(boolean);
console.log(typeof boolean);

// 0, null, undefined, NaN  => False 
// Else anything will be true






