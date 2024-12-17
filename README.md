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
```
undefined
Uncaught ReferenceError: Cannot access 'b' before initialization
```
Explain the concept of hoisting with var, let, and const.
Variables declared with var are hoisted to the top of their scope and initialized with undefined. This means the declaration of var a is moved to the top, but its assignment (a = 5) is not.
Variables declared with let (and const) are also hoisted, but they are not initialized. They exist in a "temporal dead zone" (TDZ) from the start of the block until the declaration is encountered.Accessing b before its declaration and initialization results in a ReferenceError



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
```
1
2
1
3
```
Explain how closures work in JavaScript.
This function creates a closure.
Inside it, there is a variable count initialized to 0.The function returns an inner function that increments the count variable and logs its value.
Because of closures, the inner function retains access to the count variable even after createCounter has finished executing
it gives 1,on next call it gives 2 . on the third call,A new call to createCounter() creates a new closure with a separate count variable, initialized to 0. 
The returned inner function is assigned to counter2
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
```
2
2
```
```
2
1
```
What would happen if var was replaced with let or const?
for var:
x is declared and initialized with the value 1.Inside if (true) Block: var x = 2;
x is redeclared and reassigned to 2, but since var is function-scoped, it doesn't create a new variable. Instead, it overwrites the existing x in the function's scope.
console.log(x); logs 2.
Outside the if Block:
After the if block, the value of x remains 2 because the var x inside the if block was the same x as in the function scope.
console.log(x); logs 2.
let:
let x = 2; declares a new variable that is scoped to the if block. This is separate from the x declared in the outer function scope.
console.log(x); logs 2, referring to the block-scoped x.After the if block, the block-scoped x goes out of scope.
The outer x (declared in the function scope) remains unchanged with its original value of 1.
console.log(x); logs 1.
4. Event Loop
```
console.log("Start");  
setTimeout(() => console.log("Timeout"), 0);  
Promise.resolve().then(() => console.log("Promise"));  
console.log("End");
```
Output?
```
Start
End
Promise
Timeout
```
Explain the execution order of the statements.
console.log() is a synchronous operation so it executes first and promises will resolve then promise stmt willl be executed and at last asynchronous operation will be executed which is timeout.Asynchronous tasks (setTimeout, Promise.then) are deferred and handled later via the event loop.The event loop ensures all synchronous code runs first.
Afterward, it processes microtasks (Promises) before handling the callback queue (e.g., setTimeout).Microtasks (like Promises) are given higher priority than tasks in the callback queue (like setTimeout)

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
```
undefined
Alice
```
Explain the behavior of this in both calls.
-When a function is called on its own (e.g., getName()), this defaults to:undefined in strict mode.The global object (window in browsers or global in Node.js) in non-strict mode.At this point, getName is just a standalone function. It loses its association with obj
- Here, getName is called as a method of obj.this refers to obj.this.name evaluates to "Alice", and "Alice" is logged.
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
```
Hello, Alice!
Hello, Alice!
```
How does JavaScript prototype inheritance work?
- function Person(name) is a constructor function that initializes an object with a name property.Person.prototype.greet adds a greet method to the Person prototype. This means all instances of Person can access this method via prototype inheritance.
- delete person1.greet tries to remove the greet method from the person1 object. However:greet does not exist directly on person1; it exists on the prototype(Person.prototype).Therefore, the delete operation does nothing effective.
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
```
[1, 2, 3, 4]
{ a: 1, b: 2 }
```

Explain the difference between primitive and reference types.
Arrays and objects are reference types in JavaScript.
When you assign one array or object to another variable (e.g., newArr = arr or newObj = obj), both variables point to the same reference in memory. Changes made to one will affect the other.
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
```
Start
End
After Promise
```

What is the role of await, and how does it affect the execution flow?
An async function always returns a Promise.
When the function is called, it executes synchronously up until the first await.
await pauses execution until the Promise is resolved, allowing other synchronous code to execute.
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
```
10
0
10
```
How do default parameters work in JavaScript?
- Here, only one argument (5) is passed for a.b is not provided, so it takes its default value: b = 2.it gives 10
- Here, 5 is passed for a and null is explicitly passed for b.Default parameters are only applied when the value is undefined.Since b = null, the default value is not applied.
Calculation: 5 * null → null is coerced to 0.Final result: 5 * 0 = 0.
- Here, 5 is passed for a and undefined is explicitly passed for b.so b takes default value 2 so it gives 10.
11. Object Destructuring
```
const { a, b = 2 } = { a: 1, b: undefined };  
console.log(a, b);
```
Output?
```
1 2
```

What happens when the property is undefined vs. missing in destructuring?
a is assigned the value of the property a in the object: a = 1.b is assigned the value of the property b in the object. However, b is explicitly set to undefined in the object.
In destructuring, if a property is undefined and a default value is specified, the default value is used.Since b is undefined, the default value (b = 2) is applied.
12. Type Coercion
```
console.log("5" - 2);  
console.log("5" + 2);  
console.log(null == 0); false 
console.log(null > 0);false
console.log(null ==undefined);true
console.log(null ===undefined);false
```
Output?
```
3
52
false
false
true
false
```

Explain the rules of type coercion in these cases.
- In this case, we are performing a subtraction operation.The - operator in JavaScript tries to convert both operands to numbers before performing the operation.he string "5" iscoerced to a number: Number("5") → 5.
- Here, we are performing an addition operation.In the case of the + operator, if one of the operands is a string, JavaScript performs string concatenation instead of arithmetic addition.
- null == 0 → evaluates to false because null only loosely equates to 0 in specific scenarios (e.g., null == undefined).
- In this case, JavaScript tries to convert null to a number.The expression null > 0 becomes 0 > 0, which is false.
- In JavaScript, null and undefined are loosely equal according to the loose equality comparison rules.When using the == operator, JavaScript treats null and undefined as equal because they are both special values representing the absence of a value.
- Since null and undefined are different types (null is an object, while undefined is a primitive type), null === undefined evaluates to false.
  
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
```
1
2
3
```
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
```
[1, 2, 3, 4]
{ a: 1, b: 2, c: 3 }
```
What are the use cases of the spread operator?
The spread operator (...) expands the elements of an array into individual elements.he 4 is added after spreading the elements of arr1.
The spread operator can also be used to copy properties from one object to another....obj1 expands the properties { a: 1, b: 2 }.The property c: 3 is added to the resulting object
15. typeof and instanceof
```
console.log(typeof null);  
console.log(typeof []);  
console.log([] instanceof Array);  
console.log({} instanceof Object);
console.log(typeof undefined); 
```
Output?
```
object
object
true
true
undefined
```


What are the differences between typeof and instanceof?
- type of null return object
-The instanceof operator checks if an object is an instance of a specific constructor.Here, [] is an instance of Array, so the result is true.
- Similarly, {} (an empty object) is an instance of Object.it return true
- In JavaScript, undefined is a primitive value and represents the absence of a value or an uninitialized variable.The typeof operator returns "undefined" when used with undefined.
```
console.log(0 == false);  
console.log(0 === false);  
console.log("0" == false);  
console.log("0" === false);
```
```
true
false
true
false
```
```
console.log(null == undefined);  
console.log(null === undefined);  
console.log(null == 0);  
console.log(null >= 0);
```
```
true
false
true
true
```
```
console.log([] == []);  
console.log([] === []);  
console.log({} == {});  
console.log({} === {});

```
```
false
false
false
false

```
```
console.log("5" == 5);  
console.log("5" === 5);  
console.log(5 == "5.0");  
console.log(5 === "5.0");
```
```
true
false
true
false
```
```
console.log(NaN == NaN);  
console.log(NaN === NaN);  
console.log(undefined == NaN);  
console.log(undefined === NaN);
```
```
false
false
false
false
```
```
console.log(true == 1);  
console.log(true === 1);  
console.log(false == 0);  
console.log(false === 0);
```
```
true
false
true
false
```
```
console.log("" == false);  
console.log("" === false);  
console.log("" == 0);  
console.log("" === 0);
```
output:
```
true
false
true
false
```
- In loose equality, "" is coerced to a boolean value and compared with false.Since an empty string is falsy, "" == false evaluates to true
- In strict equality, "" (a string) and false (a boolean) have different types.Therefore, "" === false evaluates to false
- In loose equality, the empty string "" is coerced to 0 before comparison."" == 0 evaluates to true.
- In strict equality, "" (a string) and 0 (a number) have different types.Therefore, "" === 0 evaluates to false.
  
 ```
console.log([] == 0);  
console.log([] === 0);  
console.log([1] == 1);  
console.log([1] === 1);
```
output:
```
true
falsw
true
false
```
- In loose equality, the empty array [] is coerced to a string, which is then converted to 0.[] converts to "", and "" == 0 evaluates to true.
- In strict equality, there is no type conversion.Since [] is an array and 0 is a number, their types are different.
- In loose equality, [1] is converted to a string ("1"), and then compared with the number 1."1" is coerced to the number 1 for comparison, so [1] == 1 evaluates to true.
- In strict equality, there is no type conversion.Since [1] is an array and 1 is a number, their types are different.
 ```
console.log(null == false);  
console.log(undefined == false);  
console.log(undefined == true);  
console.log(null === false);
```
```
false
false
true
false
```

- In loose equality, null is only equal to false when specifically coerced in this comparison.In JavaScript, null is loosely equal to false.
- In loose equality, undefined is not equal to false.
- In loose equality, undefined is not equal to true.
- In strict equality, no type conversion occurs.Since null (an object) and false (a boolean) have different types, strict equality evaluates to false.
```
console.log({} == "[object Object]");  
console.log({} === "[object Object]");  
console.log([1, 2] == "1,2");  
console.log([1, 2] === "1,2");
```
```
console.log(true == "true");  
console.log(false == "false");  
console.log(true == "1");  
console.log(false == "");
console.log("true" == true);  
console.log("false" == false);  
```
output:
```
false
false
true
true
false
false
```
-In loose equality, true is coerced to a string ("1").Then, it compares "1" == "true" which is not equal.
-In loose equality, false is coerced to a string ("0").Comparing "0" with "false" results in false.
-In loose equality, true is coerced to number 1.The comparison becomes 1 == "1" and is true.
-In loose equality, false is coerced to the number 0."" (an empty string) is also coerced to 0.Since 0 == 0 evaluates to true, this comparison is true.
- In loose comparison, JavaScript attempts to convert "true" to a primitive value."true" is a string and cannot directly compare with a boolean (true).
In this comparison:"true" is first converted to a number. In JavaScript, non-numeric strings convert to NaN.NaN compared to 1 evaluates to false.
- "false" is a string, and it tries to coerce to a number first.As with non-numeric strings, "false" becomes NaN.NaN is not equal to false or 0.

```
console.log(0 == "0");  
console.log(0 == []);  
console.log("0" == []);  
console.log([] == ![]);
```
```
true
true
true
true
```
- The string "0" is coerced to a number (0).Therefore, 0 == "0" becomes 0 == 0, which evaluates to true
- An empty array [] is coerced to a number and becomes 0.So, 0 == [] evaluates to 0 == 0, which is true.
- The empty array [] is converted to a primitive value, which is 0.The comparison "0" == 0 is then 0 == 0, which evaluates to true.
- In JavaScript, ![] evaluates to false.Now the comparison becomes [] == false.
In loose equality:
The empty array [] is converted to a primitive value, which is 0.Therefore, [] == false translates to 0 == 0, which is true.
```
console.log({} == "[object Object]");  
console.log({} == {});  
console.log({}.toString() == "[object Object]");  
console.log({}.toString() === "[object Object]");
```
```
console.log(null == undefined);  
console.log(null === undefined);  
console.log(null == 0);  
console.log(undefined == 0);
```
```
true
false
true
false
```
- In loose equality, null and undefined are considered equal.Therefore, this comparison evaluates to true.
- In strict equality, null and undefined have different types.Since their types are different, this comparison evaluates to false.
- In loose equality, null is coerced to 0.Therefore, the comparison null == 0 evaluates to true.
- In loose equality, undefined and 0 are not considered equal.undefined is only loosely equal to NaN, not numbers.
```
const obj = { valueOf: () => 5 };  
console.log(obj == 5);  
console.log(obj === 5);  
console.log(obj == "5");  
console.log(obj === "5");
```
output:
```
true
false
true
false
```
- When using the == (equality) operator, JavaScript performs type coercion.The valueOf method of obj is called, which returns 5.Since 5 (from valueOf) and 5 (a number) are equal, the result is true.
- The === (strict equality) operator does not perform type coercion.obj is an object, and 5 is a primitive number. Since their types are different, the result is false.
- valueOf is called on obj, returning 5.The string "5" is then coerced into the number 5 for comparison.Since 5 == 5, the result is true.
- The === operator checks for both value and type without coercion.obj is still an object, and "5" is a string. Since their types are different, the result is false.

