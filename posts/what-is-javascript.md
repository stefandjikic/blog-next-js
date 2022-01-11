---
title: 'What is JavaScript'
date: 'Jan 3, 2022'
description: 'Basic introduction, overview, and history of JavaScript programming language'
cover_image: '/images/js-image.png'
category: 'JavaScript'
author: 'Stefan Dj.'
author_image: '/images/stefan-profile.jpg'
---

JavaScript is a programming language that is originally created to interact with elements of web pages. It is one of the core technologies of the World Wide Web, alongside HTML and CSS. Currently, around <a href="https://w3techs.com/technologies/details/cp-javascript/" target="_blank" rel="noopener"><span>98% of websites</span> </a> use javascript as a client-side programming language.

As a client-side language, javascript is composed of:

- The Document Object Model (DOM) - API for manipulating HTML and XML documents.
- The Browser Object Model (BOM) - API for interacting with the web browser.
- ECMAScript - standard for ensuring the interoperability of web pages across different web browsers.

### Client-side language? But what about the server-side?

Javascript was originaly designed as client-side language, which means that it is executed on the clients machines or better said in the user's web browsers.

Later on, with the growing popularity of the language itself and the advent of <a href="https://nodejs.org/en/" target="_blank" rel="noopener"><span>node.js</span></a> javascript began to be used as a server-side programming language as well. 

### How does it work?

As I mentioned earlier, JavaScript allows you to add interactivity to a web page. It is most commonly used with HTML and CSS to enhance a web page’s functionality, so you can, for example, create an interactive UI login system, validate forms, create wizard-like interactive components, charts, play browser games, etc.

JavaScript is a high-level programming language, which means it is closer to human and it has strong abstraction from the machine language or the hardware itself. It is also a just-in-time compiled language, which means it compiles **during** execution of a program rather than before.
All major web browsers have a built-in JavaScript engine that executes the code on the user's device, so, when a web page is loaded (HTML and CSS are rendered), the JavaScript engine in the web browser executes the JavaScript code, and then the javascript code can modify the elements, i.e. HTML, and update the UI dynamically.

### JavaScript history

JavaScript was created by a Netscape developer named Brendan Eich in 1995. First, it was called Mocha and later renamed LiveScript.
Since the Java language was popular at that time, Netscape decided to leverage Java's fame and changed LiveScript to JavaScript. After that, Netscape released its web browser product called Netscape Navigator 3.
In the meantime, Microsoft introduced a web browser product called the Internet Explorer 3 (IE 3), which competed with Netscape. However, IE came with its JavaScript implementation called JScript, in order to avoid possible license issues with Netscape.
Since JavaScript had no standards that govern its syntax and features, and there were two different JavaScript versions, the community decided that it’s time to standardize the language.
The standardization happened in 1997, when the International Organization for Standardization and International Electrotechnical Commissions (ISO/IEC) adopted ECMAScript.

### Basics overview

In oder to define a variable in JavaScript, you can use `var` keyword:

```javascript
var age = 20;
 var name = "Eren";
```

Or you can use newer syntax which came with ES6: `let` and `const`:

```javascript
let age = 20;
 const name = "Eren";
```

where `let` is commonly used if the value is not constant and it can change later in the code, and `const` if the value stays the same - it cannot be altered. It is definitely advised to use newer ES6 syntax.

To declare function in JavaScript you can use the `function` keyword. For example, you can write a function that calculates the sum of two numbers that are passed to the function as arguments:

```javascript
function sum(x, y) {
  return x + y;
 }

 sum(2, 3) // returns 5
```

You can use `console.log` to log the result of some action in the browser console.

In the following example, we will demonstrate everything we've learned so far.

```javascript
function introduction(name, age) {
   return 'I am ' + name + ' and I am ' + age + ' years old.'
 }
 const result = introduction('Eren', 20);
 console.log(result); // "I am Eren and I am 20 years old."
```
As you can see, the `introduction` function, takes two arguments, `name` and `age`, and returns the `string` containing variables that are passed as arguments. In JavaScript, if you want to insert variable values into a string, you can separate them with the `+` sign. There are other and easier ways you can do this, but we'll talk about that in future posts.

So, you learned what JavaScript is and the overview of the JavaScript language. I hope you found this introduction helpful and I encourage you to keep learning!