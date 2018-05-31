require("babel-polyfill");


import greet from './modules/m1';
import Rect from './modules/m2';

// Include styles
// require("./styles/app.scss");

console.log("I'm the entry point");
greet();


var qube = new Rect(10, 20);
qube.test();
qube.sayHelo();

