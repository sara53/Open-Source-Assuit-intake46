// let fname = "mona";
// let age = 20;
// let myKey = "address";

// let person = {
// 	fname,
// 	age,
// 	[myKey]: "alex",
// 	display() {
// 		console.log("welcome display");
// 	},
// };

// console.log(person[myKey]); // perfered
// console.log(person.address);
// console.log(person["address"]);

// person.display(); // dotnotation
// let product = {
// 	id: 1,
// 	name: "Book",
// 	price: 300,
// 	quantity: 3,
// };

// let entries = Object.entries(product);

// let result = entries.map((item, index) => {
// 	return {
// 		key: item[0],
// 		value: item[1],
// 	};
// });
// let result = entries.map(([key, value]) => {
// 	return {
// 		key,
// 		value,
// 	};
// });

// console.log(result);

// let keys = Object.keys(product);
// let values = Object.values(product);

// console.log(keys);
// console.log(values);
// console.log(keys); //
// for (let i = 0; i < keys.length; i++) {
// 	console.log(product[keys[i]]); // values
// }
// [id,name,price,quantity] // all keys in product object
// [1,"book",300,3]
// let person1 = {
// 	fname: "alaa",
// 	lname: "ahmed",
// 	age: 20,
// };

// let person2 = {
// 	address: "alex",
// };

// let person3 = {
// 	colors: ["red"],
// };

// let result = Object.assign({}, person1, person2, person3);

// // console.log("person1 : ", person1);
// // console.log("person2 : ", person2);
// // console.log("person3 : ", person3);

// console.log("result : ", result);
// function showData(options = {}) {
// 	let defaultvalues = {
// 		name: "default name",
// 		age: "default age",
// 		address: "default addressS",
// 	};

// 	Object.assign(defaultvalues, options);

// 	console.log(`Name : ${defaultvalues.name}
//                 age : ${defaultvalues.age}
//                 address : ${defaultvalues.address}`);
// }

// showData({ name: "alaa", age: 20, address: "alex", colors: [] }); // why
// function first() {
// 	console.log("First");
// 	second();
// 	console.log("hello os");
// }

// function second() {
// 	setTimeout(() => {
// 		console.log("second");
// 	}, 2000);
// 	console.log("Welcome at iti");
// }

// first();
// setTimeout(() => {
// 	console.log("First");
// }, 2000);

// setTimeout(() => {
// 	console.log("second");
// }, 1000);

// console.log("end");

// end - second - first

// var x;
// setTimeout(() => {
// 	x = 10;
// 	// response
// 	console.log(x); //
// }, 1000);
//

/**
 *
 *  == pending
 *  == fulfilled --  then
 *  == rejected
 */
// let myPromise = new Promise(function (x, y) {
// 	//x("Data");
// 	y("Error message");
// 	// console.log(x);
// 	// console.log(y);
// });

// myPromise
// 	.then((response) => {
// 		console.log(response);
// 		console.log("Hello then fun");
// 	})
// 	.catch((error) => {
// 		console.log(error);
// 		console.log("Catch fun");
// 	});
