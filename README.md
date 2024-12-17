# JavaScript Concepts and Notes

## Section 1: JavaScript Notes and single video for JS
<a href="https://www.youtube.com/resultssearch_query=javascript+code+with+harry" style="text-decoration: underline; text-decoration-color: blue;">JS Youtube channel Link</a>

<a href="https://cwh-full-next-space.fra1.cdn.digitaloceanspaces.com/notes/JS_Chapterwise_Notes.pdf" style="text-decoration: underline; text-decoration-color: blue;">Handwritten JS NOTES.</a>

## Section 2: JavaScript Topics

<a href="https://www.youtube.com/watch?v=_FmHfOqJ4SY" style="text-decoration: underline; text-decoration-color: blue;">Hoisting</a>

<a href="https://www.youtube.com/watch?v=GAIbn16Iytc" style="text-decoration: underline; text-decoration-color: blue;">IIFE</a>

<a href="https://www.youtube.com/watch?v=SaWTn1ZNTpo" style="text-decoration: underline; text-decoration-color: blue;">Call, Apply, Bind</a>

<a href="https://www.youtube.com/watch?v=DkBcfYtBZnQ&t=371s" style="text-decoration: underline; text-decoration-color: blue;">Currying</a>

<a href="https://www.youtube.com/watch?v=Ze-JGb4I9zU&t=645s" style="text-decoration: underline; text-decoration-color: blue;">Closure</a>

<a href="https://www.youtube.com/watch?v=PesxK6-kG2A&t=14s" style="text-decoration: underline; text-decoration-color: blue;">Higher Order Functions and Callbacks</a>

<a href="https://www.youtube.com/watch?v=xOCzjgjedRc" style="text-decoration: underline; text-decoration-color: blue;">DOM and BOM</a>

<a href="https://www.youtube.com/watch?v=9JaDBYPmiJ0&t=14s" style="text-decoration: underline; text-decoration-color: blue;">Promises and Callback Hell</a>

<a href="https://www.youtube.com/watch?v=SWWl1o0LT1I" style="text-decoration: underline; text-decoration-color: blue;">Async & Await</a>

<a href="https://www.youtube.com/watch?v=oa0FJyHMuqg" style="text-decoration: underline; text-decoration-color: blue;">Memoization</a>


## React Native Topics

<a href="https://www.youtube.com/watch?v=uk-Y6c17nZ8&t=3459s" style="text-decoration: underline; text-decoration-color: blue;">Hooks in React Native</a>

<a href="https://www.youtube.com/watch?v=6RvadAuzS1E" style="text-decoration: underline; text-decoration-color: blue;">useMemo and useCallback</a>

## Additional Resources

<a href="https://www.youtube.com/results?search_query=javascript+code+with+harry" style="text-decoration: underline; text-decoration-color: blue;">YouTube Channel</a>

Output Based Questions:
1. Hoisting
```
console.log(a);  
var a = 5;  
console.log(b);  
let b = 10;
```
Output? 
Explain the concept of hoisting with var, let, and const.

2. Closures
```
function createCounter() {  
  let count = 0;  
  return function () {  
    count++;  
    console.log(count);  
  };  
}  
const counter1 = createCounter();  
counter1();  
counter1();  
const counter2 = createCounter();  
counter2();  
counter1();
```
Output?
Explain how closures work in JavaScript.

3. Scoping
```
function test() {  
  var x = 1;  
  if (true) {  
    var x = 2;  
    console.log(x);  
  }  
  console.log(x);  
}  
test();
```
Output?
What would happen if var was replaced with let or const?

4. Event Loop
```
console.log("Start");  
setTimeout(() => console.log("Timeout"), 0);  
Promise.resolve().then(() => console.log("Promise"));  
console.log("End");
```
Output?
Explain the execution order of the statements.

5. Function Overwriting
```
function greet() {  
  console.log("Hello!");  
}  
greet();  
var greet = function () {  
  console.log("Hi!");  
};  
greet();
```
Output?
What happens to the function declaration when a variable with the same name is defined?

6. this Keyword
```
const obj = {  
  name: "Alice",  
  getName() {  
    console.log(this.name);  
  },  
};  
const getName = obj.getName;  
getName();  
obj.getName();
```
Output?
Explain the behavior of this in both calls.

7. Prototype
```
function Person(name) {  
  this.name = name;  
}  
Person.prototype.greet = function () {  
  console.log(`Hello, ${this.name}!`);  
};  
const person1 = new Person("Alice");  
person1.greet();  
delete person1.greet;  
person1.greet();
```
Output?
How does JavaScript prototype inheritance work?

8. Array and Object References
```
let arr = [1, 2, 3];  
let newArr = arr;  
newArr.push(4);  
console.log(arr);  
let obj = { a: 1 };  
let newObj = obj;  
newObj.b = 2;  
console.log(obj);
```
Output?
Explain the difference between primitive and reference types.

9. Asynchronous Behavior
```
async function asyncFunc() {  
  console.log("Start");  
  await Promise.resolve();  
  console.log("After Promise");  
}  
asyncFunc();  
console.log("End");
```
Output?
What is the role of await, and how does it affect the execution flow?

10. Default Parameters
```
function multiply(a, b = 2) {  
  return a * b;  
}  
console.log(multiply(5));  
console.log(multiply(5, null));  
console.log(multiply(5, undefined));
```
Output?
How do default parameters work in JavaScript?

11. Object Destructuring
```
const { a, b = 2 } = { a: 1, b: undefined };  
console.log(a, b);
```
Output?
What happens when the property is undefined vs. missing in destructuring?

12. Type Coercion
```
console.log("5" - 2);  
console.log("5" + 2);  
console.log(null == 0);  
console.log(null > 0);
```
Output?
Explain the rules of type coercion in these cases.

13. Callback Hell
```
setTimeout(() => {  
  console.log("1");  
  setTimeout(() => {  
    console.log("2");  
    setTimeout(() => {  
      console.log("3");  
    }, 100);  
  }, 100);  
}, 100);
```
Output?
What challenges does callback hell pose, and how can it be avoided?

14. Rest/Spread Operator
```
const arr1 = [1, 2, 3];  
const arr2 = [...arr1, 4];  
console.log(arr2);  
const obj1 = { a: 1, b: 2 };  
const obj2 = { ...obj1, c: 3 };  
console.log(obj2);
```
Output?
What are the use cases of the spread operator?

15. typeof and instanceof
```
console.log(typeof null);  
console.log(typeof []);  
console.log([] instanceof Array);  
console.log({} instanceof Object);
```
Output?
What are the differences between typeof and instanceof?


