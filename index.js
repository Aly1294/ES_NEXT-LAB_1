// ES_NEXT LAB_1

/* ....... Question 1 ......... */
/* 1.	Swap the values of two variables using destructuring  */

/*
//take input from the users
let a = prompt('Enter the first variable: ');
let b = prompt('Enter the second variable: ');
let arr=[a,b];
//using destructuring assignment
var[i1, i2] = arr;
var [i1,i2]=[i2,i1];

console.log(`The value of a after swapping: ${i1}`);
console.log(`The value of b after swapping: ${i2}`);
*/


/* ....... Question 2 ......... */
/* 2.	Using rest parameter and spread operator return max value 
   from any array note: array length is not fixed return min and max value and display each of them separately after function calling
   Do all this using function 
*/

/*
let arr=[];
let input_value ;
for (let index = 0; index < 5; index++) {
    input_value = parseInt(prompt(`Enter number ${index+1}: `));
    arr[index]=input_value;
    console.log(arr[index]);
}
console.log(arr);

function get_max_min_values (...rest){ // i use ...before rest to collect data
    console.log(rest);
    console.log(`The maximum value = ${Math.max(...rest)}`);
    console.log(`The minimum value = ${Math.min(...rest)}`);
}

get_max_min_values(...arr); // i use ... before arr to spred the data in the array
*/

/* ....... Question 3 ......... */
/* 3.	Create a student literal object that contains: name, University, 
    faculty, and final grade, and use print his data in the console using template 
    literals in this 
    Format :{Std_name} is a student in faculty of 
    {fac_name} in university {Uni_name}And his final grad is {grad}.
*/

/*
let student ={
    user:"Mohamed",
    university:"ITI",
    faculty:"Engineering",
    final_grade:"A",
    print:()=> console.log(`${student.user} is a student in faculty of ${student.faculty} in university ${student.university} and his final grad is ${student.final_grade}.`),
};

student.print();

*/

/* ....... Question 4 ......... */
/* 
4.	Make a set that holds countries names.
    a.	Try to add repeated names, will the set accept it?
    b.	Print the set values using spread operator and using for…of.
    c.	return the numbers of repeated items in set 
    d.	make difference from s1 and s2 
    e.	make union in another way  
*/

/*

// Point a in the question
let arr = ["tanta","Giza","Mansoura","Cairo","Mansoura"];
// let arr = ["d","b","c"];
let arr2 = ["Cairo","Giza","Mansoura","Cairo","Mansoura"];
// let arr2 = ["a","c","e"];
let set1=new Set(arr);
let set2=new Set(arr2);
let set3=new Set();
console.log(set1); // set will not accept the repeated values
// Point b in the question
for (const x of set1) {
    console.log(x);
}

console.log(".............................................");


function get_values_of_set1_using_forIn_Loop (...rest){
    for (const key in rest) {
        console.log(rest[key]);
    }
}
get_values_of_set1_using_forIn_Loop(...set1);
// Point c in the question
let length_of_arr=arr.length;
let size_of_set1=set1.size;
console.log(`There are ${length_of_arr-size_of_set1} values repeated`);
let flag;
// Point d in the question
 Set.prototype.difference = function(set2){
    for (let x of this) {
        flag=0;
        for (let y of set2) {
            if(x===y){
                flag=0;
                break;
            }
            else{
                flag=1;
            }
        }
        if(flag==1){
            set3.add(x);
        }
        
    }
    console.log(set3)
}
set1.difference(set2);

// Point e in the question
let set4=new Set([...set1,...set2]);
console.log(set4);
*/


/* ....... Question 5 ......... */
/* 
5.	Make a Map that contains the student name as a key,
    and object that contains an array of his studied courses and his grade in each course.
    (The object structure as following: 
        {“negm”:[
                    {Coursename:”JavaScript”, Grade:”Excellent”},
                    {Coursename:”Jquery”, Grade:”Good”},
                    {Coursename:”React”, Grade:”V.Good”},
                    {Coursename:”ESNext”, Grade:”Good},
                    {Coursename:”NodeJS”, Grade:”V.Good”}
                ]
        }

    a.	Loop in the Map and display each student along with his grades in all courses using 
    two ways 
    b.	Make a dropdown list and fill it with the student names (from the Map), 
    and when the user selects specific student display his grades in all courses.

*/


let map = new Map();
map.set(2916, "negm");
map.set(2917, "negm");
// console.log(map);

map.set("mohamed", [
  { Coursename: "JS", Grade: "Good" },
  { Coursename: "J_Query", Grade: "Good" },
  { Coursename: "React", Grade: "Good" },
  { Coursename: "ES_Next", Grade: "Good" },
  { Coursename: "Node_JS", Grade: "Good" },
]);

map.set("karem", [
  { Coursename: "JS", Grade: "v.Good" },
  { Coursename: "J_Query", Grade: "v.Good" },
  { Coursename: "React", Grade: "V.Good" },
  { Coursename: "ES_Next", Grade: "v.Good" },
  { Coursename: "Node_JS", Grade: "V.Good" },
]);

map.set("negm", [
  { Coursename: "JS", Grade: "Excellent" },
  { Coursename: "J_Query", Grade: "Excellent" },
  { Coursename: "React", Grade: "Excellent" },
  { Coursename: "ES_Next", Grade: "Excellent" },
  { Coursename: "Node_JS", Grade: "Excellent" },
]);
// console.log(map.get("negm"));

let mySelect = document.getElementById("mySelect");

// First way to loop using original for loop
function get_data() {
  if (mySelect.value === "negm") {
    console.log(`Negm Grades :`);
    for (let index = 0; index < map.get("negm").length; index++) {
      console.log(`
                ${map.get("negm")[index].Coursename} course : ${
        map.get("negm")[index].Grade
      } 
                `);
    }
  } else if (mySelect.value === "mohamed") {
    console.log(`Mohamed's Grades :`);
    for (let index = 0; index < map.get("mohamed").length; index++) {
      console.log(`
                ${map.get("mohamed")[index].Coursename} course : ${
        map.get("mohamed")[index].Grade
      } 
                `);
    }
  } else if (mySelect.value === "karem") {
    console.log(`Karem's Grades :`);
    for (let index = 0; index < map.get("karem").length; index++) {
      console.log(`
                ${map.get("karem")[index].Coursename} course : ${
        map.get("karem")[index].Grade
      } 
                `);
    }
  }
}


// Second way to loop using for of loop
/*
function get_data() {
  if (mySelect.value === "negm") {
    console.log(`Negm Grades :`);
    for (const x of map.get("negm")) {
      console.log(`
            ${x.Coursename} course : ${x.Grade} 
            `);
    }
  } else if (mySelect.value === "mohamed") {
    console.log(`Mohamed Grades :`);
    for (const x of map.get("mohamed")) {
      console.log(`
                ${x.Coursename} course : ${x.Grade} 
                `);
    }
  } else if (mySelect.value === "karem") {
    console.log(`Karem Grades :`);
    for (const x of map.get("karem")) {
      console.log(`
                    ${x.Coursename} course : ${x.Grade} 
                    `);
    }
  }
}
*/