let a = document.getElementById("box");
let count = a.innerText;
function increment() {
  count++;
  a.innerText = count;
  check();
}
function decrement() {
  count--;
  a.innerText = count;
  check();
}
function check() {
  let colorselect = document.getElementById("box").innerText;
  console.log(typeof colorselect);
  colorselect = parseInt(colorselect);
  console.log(typeof colorselect);
  console.log(colorselect);
  if (colorselect == 25) {
    document.getElementById("box").style.backgroundColor = "rgb(252, 252, 128)";
  } else if (colorselect >= 27 && colorselect < 35) {
    document.getElementById("box").style.backgroundColor = "rgb(249, 190, 82)";
  } else if (colorselect >= 35 && colorselect < 50) {
    document.getElementById("box").style.backgroundColor = "orange";
  } else if (colorselect <= 7) {
    document.getElementById("box").style.backgroundColor = "blue";
  } else if (colorselect >= 50) {
    document.getElementById("box").style.backgroundColor = "red";
  } else if (colorselect <= 22 && colorselect > 15) {
    document.getElementById("box").style.backgroundColor = "skyblue";
  } else if (colorselect <= 15 && colorselect > 7) {
    document.getElementById("box").style.backgroundColor = "rgb(79, 139, 208)";
  } 
if (colorselect == -10) {
	  console.log("hello");
    alert("you are dead");
  }
}
