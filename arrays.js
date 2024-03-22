// Find the last element of the following arrays.arr1 = [3,7,34,90,12]arr2 = [true, "green", "where",12,56]
let arr1 = [3,7,34,90,12];
let last = arr1[arr1.length -1]
console.log({last});


let arr2 = [true,"green","where",12,56];
let islast = arr2[arr2.length -1];
console.log({islast});

// Write a JS program that will join the following array elements into a stringmyPets = ["Cow", "Bird", "Snake", "Dog"];
let sentence =  ["Cow", "Bird", "Snake", "Dog"];
let sent=sentence.join();
console.log({sent});

// Write a JS script to sort the following array itemsvar arr3 = [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ];
let arr3 = [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ];
let array3 = arr3.sort();
console.log({array3});


// Write a JS script to search for the following word in the array."food"If the word is present, return it else return "the search word was not found"let arr5 = ["the", "way", "x", 4];
let arr5 = ["the", "way", "x", 4];
let  array = arr5.includes("food");
if(array == true){
    console.log(true);}
    else{
    console.log("the search word was not found");
}



// Write a JS script to sort the following string:let word = "renniw"
let word = ("renniw");
let words = (word.sort());
console.log({words});
