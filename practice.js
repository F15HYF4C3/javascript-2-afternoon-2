/* 
  Once you complete a problem, refresh ./SpecRunner.html in your browser and check to see if the problem's test(s) are passing.
  Passed tests will be indicated by a green circle.
  Failed tests will be indicated by a red X.

  You can refresh the page at any time to re-run all the tests.
*/

////////// PROBLEM 1 //////////

// Do not edit the code below.
var arr = [10,20,30];
// Do not edit the code above.

/*
  Create a function named 'first' that is given 'arr' as an argument.
  Return the first item in the given array.
*/

//Code Here
function first(arr){
  return arr[0];
}


////////// PROBLEM 2 //////////

// Do not edit the code below.
var arr = [40,50,60];
// Do not edit the code above.

/*
  Create a function named 'last' that is given 'arr' as an argument. 
  Return the last item in the given array.
*/

//Code Here
function last(arr){
  return arr[2];
}


////////// PROBLEM 3 //////////

// Do not edit the code below.
var family = ['Tyler', 'Jordyn', 'Ryan', 'Chelsey', 'Ireland'];
// Do not edit the code above.

/*
  Create a function named 'looper' that is given family as it's only argument. 
  Loop through the given array and alert every item in the array.
*/

//Code Here
function looper(family){
  for(i = 0; i < family.length; i++){
    alert(family[i]);
  }
  
}
var myAlerts = looper(family);
console.log(myAlerts);

////////// PROBLEM 4 //////////

// Do not edit the code below.
var letters = ['A', 'B', 'C', 'D', 'E'];
// Do not edit the code above.

/*
  Write a function called reversedLooper that is given letters as it's only argument. 
  Loop through the given array backwards alerting every item in the array starting at the end.\
*/

//Code Here
function reversedLooper(arrt){
  for (var i = arrt.length - 1; i >= 0; i--){
    alert(arrt[i]);
  }
}


var lettersRev = reversedLooper(letters);
console.log(lettersRev);


////////// PROBLEM 5 //////////

// Do not edit the code below.
var nums = [1,2,3,6,22,98,45,23,22,12];
// Do not edit the code above.

/*
  Write a function named evenFinder that is given nums as it's only argument.
  Return an array that contains the even numbers from the nums array.
*/

//Code Here
function evenFinder(arr){
  const newNums = [];
  for(i = 0; i < arr.length; i++){
    if(arr[i] % 2 === 0){
    newNums.push(arr[i]);
    console.log(newNums);
    }
  }return newNums;
}

const evens = evenFinder(nums);
console.log(evens);




/////////////////////// EXTRA PRACTICE PROBLEMS BELOW ////////////////////
////////// MOVE ONTO NEXT SECTION BEFORE WORKING ON THESE ////////////////







////////// PROBLEM 6 //////////

// Do not edit the code below.
var numbersArray = [1,2,34,54,55,34,32,11,19,17,54,66,13];
// Do not edit the code above.

/*
  Write a function called divider that is given one argument, numbersArray.
  Have divider return an Array with the first item in the array being the evens array (all the even values from numbersArray) and the second item in the Array being the odds array (all the odd values from numbersArray).
*/

//Code Here
function divider(arr){
  const evenNums = [];
  const oddNums = [];
  const dividedNums = [evenNums, oddNums];
  for(i = 0; i < arr.length; i++){
    if(arr[i] % 2 === 0){
    evenNums.push(arr[i]);
    console.log(evenNums);
    }else{
      if(arr[i] % 2 !== 0){
        oddNums.push(arr[i]);
        console.log(oddNums);
      }
    }
  }return dividedNums;
}

var separateArrs = divider(numbersArray);
console.log(separateArrs);


////////// PROBLEM 7 //////////

// Do not edit the code below.
var getRandomArbitrary = function() {
  return Math.floor(Math.random() * 30);
};

// Do not edit the code above.

/* 
  var numbers = [0,3,4,5,6,7,9,14,17,24,25,26,29,30];
  Above you're given a function that will return a random number between 0 and 30. There is also a commented out array full of numbers to help you visualize what your function will be receiving.
  **Write a function named finder that will take in an array as an argument.
  **It will then  get a random number (by invoking getRandomArbitrary).
  **Loop through the array to see if that random number is in the array. 
  **If it is, return true, if it's not, return false

  // **Write a function named finder that will take in an array as an argument.
//  **It will then  get a random number (by invoking getRandomArbitrary).

//1. Loop through the array
//2. see if that random number is in the array.
//3. CHECK If the (result = randomArbi....) is (in the array) return true, 
//4. if it's not,(in the array) return false

*/
//NOTES - i.e. code-evaluating questions:
//when do we want to exit this function?
//what is the purpose of this function?
//Do you want to check the entire array for the condition, or only a portion? – Ask this before writing any return or final condition. Write the criteria in your if\else statements based on WHERE or WHEN you want an output or new command to run or exit. EX: If you need to check an entire array, you can use “.length” as part of your final “else” or “conditional block”
//Likewise, other built-in browser functions can help you accomplish the “where do I stop and spit the answer I landed on out” in your code.
//An iterator can be flexible, and when you run your conditions against it, you can compare the value at the current index of that iterator – or you can also tell the iterator AS AN INDEX to stop AT that index, with another (optionally final) condition.
//TIP: Console.log portions of your output that the code is stopping at to compare what the value is and why it might be getting stuck, this will help you debug, simplify, or reconsider code.
//Still not 100% clear on "return" - it will exit the function if you are not careful with the way you use it: below the translation for this usage is: "ifStatement#1's condition is met, THEN the function can enter it's block and perform the code (ie returning true)-BUT if it does NOT meet criteria, move to the next block. The next block (elseif-Statement#2) is not accessible to the function until ITS condition is also met. The function must start back at the beginning with the next advancement of the iterator and check the conditions again until the value it is comparing to #1 or #2 meets the required criteria. Run the return statement that is located within the block that becomes accessible first."
//Code Here

const arrs = [0,3,4,5,6,7,9,14,17,24,25,26,29,30];
function finder(arrs){
 var result = getRandomArbitrary();//result represent the value of a random number invoked
 console.log('Found '+ result + ' in the array?')
  for(i = 0; i < arrs.length; i++){//Start at index 0, stop repetition once i is no longer less than the last index, run code (check the conditions), and start over at the next index if noether condition returns an output.
    console.log(result, arrs.length-1===i);
   if(result===arrs[i]){//"RandomNumber" MUST be equal to the VALUE your current array index represents
      return true;//can only be accessed if above "entry key" condition is met
   }else if(arrs.length-1 === i){//Will only be tested if first condition block is not made accessible to function. This checks the actual index value of i, rather than the element-value that that index represents.
     return false;//This code is not accessible to the function until the above condition's criteria is met- i.e. until i is equal to the last index-location in the array.
   
  }
}//Boolean(result);? Ugh.... I am returning boolean values... Moving on.
}

console.log(finder(arrs));

////////// PROBLEM 8 //////////

// Do not edit the code below.
var myGroceryList = ['chips', 'pizza', 'hotpockets', 'MtnDew', 'corndogs'];
// Do not edit the code above.

/*
  Here we're going to write a function that mimics going shopping and checking things off of our grocery list and adding new items to our list.

  Write a function called removeItem that is given two arguments, the first is myGroceryList, and the second is an item to remove from myGroceryList. 
//function removeItem(myGroceryList, rItem){}
  If the second argument (or the item to add or remove) matches an item in myGroceryList, remove that item from the your grocery list and return the new, updated grocery list.
//for(i = 0; i < myGroceryList.length; i++){
//if(rItem === myGroceryList[i]){
      myGroceryList.splice(i, 1);}}  return myGroceryList;}
  Once you do that, write another function called addItem that is given two arguments, the first is myGroceryList and the second is an item to add to your grocery list. 
//function addItem(myGroceryList, aItem){
  }
  In addItem add the item you passed in to myGroceryList then return the new, updated grocery list.

  In both removeItem and addItem check to see if the 'myGroceryList' and 'item' arguments are truthy.
  If they are not, return an empty array.

  Here are some examples of calling your functions and what should be returned:
  removeItem(myGroceryList, 'chips') --> ['pizza', 'hotpockets', 'MtnDew', 'corndogs'];
  addItem(myGroceryList, 'Jerky') --> ['pizza', 'hotpockets', 'MtnDew', 'corndogs', 'Jerky'];
  removeItem(myGroceryList) --> [];
  addItem() --> [];
*/

//Code Here
function removeItem(myGroceryList, rItem){
  for(i = 0; i < myGroceryList.length; i++){
    if(rItem === myGroceryList[i]){
      myGroceryList.splice(i, 1);
      true;
    }else if(rItem !== myGroceryList[i]){
      myGroceryList.splice();
    }
  }  return myGroceryList;
}

var newShortList = removeItem(myGroceryList, 'chips');
console.log(newShortList);

function addItem(myGroceryList, aItem){
  for(i = 0; i < myGroceryList.length; i++){
    if(myGroceryList[i] === aItem){
      return true;
    }else{
      if(myGroceryList[i] !== aItem){
       return myGroceryList.splice(i, 0, aItem);
      }
    }
  }return myGroceryList;
}  


newLongList = addItem(myGroceryList, 'Rolls');
console.log(newLongList);
////////// PROBLEM 9 //////////

/*
  Write a function called maker that creates an array, fills that array with numbers from 1 to 215, then returns the array.
*/

//Code Here
function maker(){
  var arrNums = [];
    for(i = 1; i <= 215; i++){
  arrNums.push(i);
}return arrNums;
}

allArray = maker();
console.log(allArray);


////////// PROBLEM 10 //////////

// Do not edit the code below.
var numbers = [5, '9', 16, 19, '25', '34', 48];
// Do not edit the code above.

/*
  Write a function called addTen that is given 'numbers' as it's only argument.
  Return a new array after adding ten to each item in numbers. 
  *Verify your answer is correct. --> [15, 19, 26, 29, 35, 44, 58]
*/
  
//Code Here
function addTen(numbers){
  var numbers2 = [];
for(i = 0; i < numbers.length; i++){
  
  console.log(numbers);
  }return numbers2.push(numbers[i]);
}
var laLaLand = addTen(numbers);
console.log(laLaLand);

////////// PROBLEM 11 //////////

// Do not edit the code below.
var num1 = Math.floor(Math.random() * 30);
var num2 = Math.floor(Math.random() * 30);
var arr1 = [];
var arr2 = [];
for(var i = 0; i < num1; i++){
  arr1.push(i);
}
for(var i = 0; i < num2; i++){
  arr2.push(i);
}
// Do not edit the code above.
console.log(arr1);
console.log(arr2);

/*
  Above is some code that adds a random number of values to both arr1 and arr2.
  Write a function called 'longer' that is given arr1 and arr2 as it's only arguments. 
  Return the array which is longest.
*/

//Code Here
var isLonger = [];
function longer(arr1, arr2){
    if(arr1.length > arr2.length){
    isLonger = arr1.slice();
  }else
    if(arr2.length > arr1.length){
      isLonger = arr2.slice();
    }return isLonger;
  } 

console.log(isLonger);


/*
  As a continuation of the previous problem, write another function called 'both'.
  Your 'both' function will be given two arguments, arr1 and arr2 (from the previous example).
  'both' should return a new array with the matching numbers found in both arr1 and arr2.
function divider(arr){
  const evenNums = [];
  const oddNums = [];
  const dividedNums = [evenNums, oddNums];
  for(i = 0; i < arr.length; i++){
    if(arr[i] % 2 === 0){
    evenNums.push(arr[i]);
    console.log(evenNums);
    }else{
      if(arr[i] % 2 !== 0){
        oddNums.push(arr[i]);
        console.log(oddNums);
      }
    }
  }return dividedNums;
}
  Example: var arr1 = [1,2,3,4]; var arr2 = [2,4,5,6]; newArray // [2,4]
*/

//Code Here

function both(arr1, arr2){
  const newArr = [];
for(i=0; i<arr1.length && i < arr2.length; i++){
if(arr1[i] === arr2[i]){
  newArr.push(i);
}
}return newArr;
}
console.log(both(arr1, arr2));

////////// PROBLEM 12 //////////

// Do not edit the code below.
var devMountainEmployees = [];

var tyler = {
    name: 'Tyler',
    position: 'Lead Instructor/Engineer',
    spiritAnimal: 'Honey Badger'
};

var cahlan = {
    name: 'Cahlan',
    position: 'CEO',
    spiritAnimal: 'butterfly'
};

var ryan = {
    name: 'Ryan',
    position: 'Marketing',
    spiritAnimal: 'fox'
};

var colt = {
    name: 'Colt',
    position: 'Everything really',
    spiritAnimal: 'Young Male Horse'
};
// Do not edit the code above.

/*
  Above you're given an empty array and four variables containing objects. 
  Fill the devMountainEmployees array with those four objects. 
  After that console.log the length of the Array and make sure that it's equal to 4. 
*/

//Code Here
devMountainEmployees.push(tyler);
devMountainEmployees.push(cahlan);
devMountainEmployees.push(ryan);
devMountainEmployees.push(colt);
console.log(devMountainEmployees.length);
console.log(devMountainEmployees);


/*
  Now let's say Cahlan has a mental breakdown and has to take a leave of absence to 'find himself'.
  Loop through your devMountainEmployees until you find cahlan, then remove him from the array.
*/

//Code Here
function employeeLeave(devMountainEmployees){
for(i=0, i <= devMountainEmployees[cahlan]; i++;){
  devMountainEmployees.splice(i);
}return devMountainEmployees;
}
const newWorkers = employeeLeave(devMountainEmployees);
console.log(newWorkers);

////////// PROBLEM 13 //////////


/*
  A very clean way to pass around large LISTS (arrays) of COLLECTIONS (objects) of Data is to have an Array full of objects. 
  Create an empty array called users.
*/

//Code Here
var users = [];

/*
  Now add three user objects to your users array. Each user object should contain the following properties. name, email, password, username.

  Include the following user1 object as one of the objects in your array.
*/

// Do not edit the code below.
var user1 = {
    name: 'Tyler McGinnis',
    email: 'tylermcginnis33@gmail.com',
    password: 'iLoveJavaScript',
    username: 'infiniteLoop'
};
// Do not edit the code above.

//Code Here
var user2 = {
  name: 'name',
  email: 'email',
  password: 'password',
  username: 'username'
}
var user3 = {
  name: 'name',
  email: 'email',
  password: 'password',
  username: 'username'
}
users.push(user1);
users.push(user2);
users.push(user3);
console.log(users);


/*
  Now you have a very common data structure. 
  Twitter is a good use case.
  It's easy to imagine that your followers list on Twitter is an Array full of objects and those objects contain properties about the specific person you follow.

  Now let's say that Tyler decided to delete his account.
  Loop through your array of objects until you find Tyler's account (use tylermcginnis33@gmail.com to find him).
  Once you find the particular index he's located in, delete him from the array.
*/

//Code Here



/*
  The activity we just did is very much how data works in 'the real world'.
*/
