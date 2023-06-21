// //your JS code here. If required.
// var c = document.getElementById("level");
// var level = 0;
// while (c.parentNode) {
//   level++;
//   c = c.parentNode;
// }
// var message = "The level of the element is: " + level;
// alert(message);
let level = document.querySelectorAll("ul li")
let domLevel = 0;

for (let i = 0; i < level.length; i++) {
  if (level[i].id === "level") {
    domLevel = i +1;
    break;
  }
}
alert("The level of the element is: " + domLevel);
