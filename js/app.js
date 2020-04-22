let element = document.getElementById("clickBtn");
let arry = ['red','blue','green'];
const body = document.querySelector('body');
element.addEventListener("click",function(e){
  e.preventDefault();
  const colorIndex= parseInt(Math.random()*arry.length)
  body.style.backgroundColor = arry[colorIndex]
});