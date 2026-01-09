// let arr = [10, 30, 50, 80, 660];

// console.log(Math.max(...arr));

// spread operator// syntax suger
// let arr1 = ["mona", "ahmed"]; // location
// let arr2 = ["os", "pd", ...arr1, 1, 2, 3];

// console.log("arr1 : ", arr1);
// console.log("arr2 : ", arr2);
// arr1.push("alaa");

// let arr1 = ["mona", "ahmed"]; // location
// let arr2 = [];

// for (let i = 0; i < arr1.length; i++) {
// 	arr2[i] = arr1[i];
// }
// arr1.push("alaa");
// console.log("arr1 : ", arr1);
// console.log("arr2 : ", arr2);

// let x = 3; //
// let y = x;
// x = 5;

// console.log("x : ", x);
// console.log("y : ", y);
// let fname = 3; // number

// let arr = ["mona", "alaa"]; // refernce
// console.log(typeof arr);
/** datatypes
 * primitive datatype
 * == string
 * == number
 * == boolean
 * == undefined
 * == null
 * == bingInt
 * == Symbol()
 * refernce datatype
 *  == object
 */
/** ============================= */
// const arr = ["mona", "ahmed"]; // reference address
// // arr.push("Alaa"); // valid
// // arr = [];

// console.log(arr); //
// console.log(PI); // Error
// const PI = 3.14;
// const PI = 3.14;

// PI = 2; // reassign
// console.log( PI );

// let fname = "mona";
// console.log(window.fname); //undefined
// console.log(fname); //
// let fname = "mona"; //
// console.log(fname);
// let fname = "alaa";
// console.log(fname);
// fname = 10;
// fname = true;
// console.log(fname);
// window optional
// var fname = "alaa";

// console.log(fname); // window.fname
// console.log(window.fname);

// i
// if (true) {
// 	let i = 10;
// }

// console.log(i);

// function showValues() {
// 	let trackName = "os";
// 	for (let i = 0; i < 3; i++) {
// 		console.log(trackName); //
// 		console.log(i);
// 	} // end of for
// 	//console.log(" i outside loop is : ", i);
// }

// showValues();
// js -- declaration phase

/**
    1- create global execution context (container)
    2- define global object window
    3- define special object called this = window
    4- allocate memory for any variable defined with keyword var and set initial value = undefined (HOISTING)
    5- HOISTING for function statement(declaration)
    -----------------------------------------------------
    execution phase
 */

// console.log(fname);
// var fname = "mona";
// console.log(fname);

// var fname; //undefined
// console.log(fname); // undefined
// fname = "mona"; // mona
// console.log(fname); // mona
// spread operator
// let person1 = { fname: "mona", age: 20, address: "alex" };

// let person2 = { colors: ["red"], fname: "ahmed", ...person1 };

// console.log("person 1 ", person1);
// console.log("person2 ", person2);

// function getResponse() {
// 	// generic
// 	return { data: [{ id: 1, name: "value" }, {}, {}] };
// }

// let { data: students } = getResponse();
// console.log(students);
// let person = {
// 	fname: "ali",
// 	age: 20,
// 	color: "red",
// 	products: [{ id: 1, name: "book" }],
// };

// let { fname: x, color: y } = person;
// // let { fname: fname, color: color } = person;
// let { fname, color, products } = person;

// console.log(" fname : ", fname);
// console.log(" color : ", color);
// console.log(products);

// console.log("x : ", x);
// console.log("y : ", y);

// function useState(data) {
// 	return [
// 		data,
// 		function () {
// 			console.log("welcome open source");
// 		},
// 		30,
// 	];
// }

// let [x, y] = useState("mona");
// y();
// console.log(y);

// console.log("x : ", x);
// console.log("y : ", y);

// let arr = ["mona", "ahmed", 10, true];

// // // desctructring
// let [, , z] = arr; //
// let [x, y] = [10, 20, 30]; //

// console.log("z : ", z);

// (function () {})();

// console.log("-------------");

// function sum(x, y) {
// 	console.log(x + y);
// }

// // console.log(sum);
// // sum();
// console.log(sayHello); //

// sayHello();
// console.log(sayHello);
// let sayHello = function () {
// 	console.log("Welcome Nadia");
// };
// sayHello();

// sayHello();
// // console.log(sayHello);
// ----------------------------------
// statement Hoisting -- calling
// expression -- variable
// default values
// function sum(x = 0, y = 0) {
// 	console.log(x + y);
// }

// sum();

// rest params

// function showData(...z) {
// 	console.log(z);
// 	// console.log("X : ", x);
// 	// console.log("Y : ", y);
// 	// console.log(arguments); //
// }

// showData("mona", "ahmed", true, 10, 40);

// let [x, ...y] = ["mona", "ahmed", true, 10, 40];
// console.log(x);
// console.log(y);
// that pattern ??? adv js
// bind - call -- apply search

// that
// window
// var fname = "mona";

// let person = {
// 	fname: "ali",
// 	display: () => {
// 		console.log(this); // window
// 		setTimeout(() => {
// 			console.log(this.fname); // window
// 		}, 2000);
// 	},
// };

// person.display(); //person
// var fname = "ali";

// let lname = "ahmed";

// console.log(`welcome open source ${lname} ${lname} ${fname}

//                     i'm sara
//                         from XXX`);
