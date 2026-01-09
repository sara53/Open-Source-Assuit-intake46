/**
 * var
 * --------------------------
 *  == reassign accept different datatype
 *  == redeclaration
 *  == hoisting
 *  == function scope
 *  == added to window object
-----------------------------------------------
let 
----------------------------------------------
    == reassign accept different datatype
    == can't  redeclaration
    == hoisting TDZ temporalry dead zone
    == block scope
    == not added to window object
-----------------------------------------------
const
----------------------------------------------
    == can't reassign accept different datatype
    == can't  redeclaration
    == hoisting TDZ temporalry dead zone
    == block scope
    == not added to window object
 */

//

// // statement
// function sum(x, y) {
// 	return x + y;
// }

// // expression
// let add = function (x = 0, y = 0) {
// 	return x + y;
// };

// arrow functions

// arrow function

// let sayHello = () => "iti";

// let square = (x) => x * x;

// let sum = (x, y) => x + y;

// let execute = () => {
// 	console.log("os");
// 	console.log("Welcome");
// 	return "iti";
// };

//----------------------------------

/**
 *  === string api
 *  === indexOf
 *  == lastIndexOf
 *  == include
 *  == startsWith
 *  == endsWith
 *  == trim
 *  == trimStart
 */
/**
 * Array API
 * --------------------------
 *  == find
 *  == findIndex
 * == every == and
 * == some == or
 * == map
 * == reduce -- sum --
 * == forEach
 * == filter
 */

// let products = [
// 	{ id: 1, name: "Laptop", price: 1500, category: "Electronics" },
// 	{ id: 2, name: "Smartphone", price: 800, category: "Electronics" },
// 	{ id: 3, name: "Headphones", price: 200, category: "Accessories" },
// 	{ id: 4, name: "Keyboard", price: 100, category: "Accessories" },
// 	{ id: 5, name: "Chair", price: 250, category: "Furniture" },
// 	{ id: 6, name: "Desk", price: 300, category: "Furniture" },
// 	{ id: 7, name: "Backpack", price: 50, category: "Bags" },
// 	{ id: 8, name: "Shoes", price: 120, category: "Footwear" },
// 	{ id: 9, name: "Watch", price: 400, category: "Accessories" },
// 	{ id: 10, name: "Tablet", price: 600, category: "Electronics" },
// ];

// products.forEach((product, index) => {
// 	console.log(`${product.name} ${index}`);
// });
// let result = products.filter((product, index) => {
// 	return product.price < 250;
// });
// console.log(result);
// and  -- or
// let arr = ["os", "pd", "mean"];
// let result = arr.map((value, index) => {
// 	return {
// 		id: index + 1,
// 		trackName: value,
// 	};
// });

// console.log(result);
// let result = arr.some((value, index, arr) => value.startsWith("s"));
// console.log(result);
// let arr = [10, 20, 25, 50, 60];

// // js engine
// let result = arr.findIndex((value, index, arr) => value > 25);

// console.log(result);
// function findElement(x, y, z) {
// 	console.log("x : ", x);
// 	console.log("y : ", y);
// 	console.log("z : ", z);
// 	console.log("-------------");
// 	for (let i = 0; i < arr.length; i++) {
// 		if (arr[i] > 25) return arr[i];
// 	}
// }

// for (let i = 0; i < arr.length; i++) {
// 	findElement(arr[i], i, arr);
// }
