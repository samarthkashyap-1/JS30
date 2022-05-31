let city = "";
let cityState = "";
let count = 0;
const cities = [];
const input = document.querySelector("#input");
 
const start = document.querySelector(".play");
const inp = document.querySelector(".input");
const score = document.querySelector(".scoreb");
start.addEventListener("click",()=>{
   
    start.classList.toggle("started");
    inp.style.display= "flex"
    score.style.display= "flex"
    scrollTo(score)
    

  setTimeout(() => {
    
    fetch("city.json")
  .then((response) => response.json())
  .then((data) => {
    cities.push(...data);

    run();
  });
  }, 1000);

})


function run() {
  const snum = Math.floor(Math.random() * 1223);
  cityState = cities[snum].state;
  scity = cities[snum].name;
  document.querySelector(".citybox").innerHTML = `
      <h1 class="city"> ${scity} </h1>
      `;
}

const checkAnswer = () => {
  let aa = input.value.toLowerCase();
  let b = cityState.toLowerCase();

  if (aa === b) {
    
    count++;
    document.querySelector(".score").innerHTML = count;
    document.querySelector(".citybox").innerHTML = `
      <h1 class="city"> Correct Answer </h1>
      
      `;
    document.querySelector(".city").style.border = "4px solid green"
    
    setTimeout(() => {
      run()
    }, 1500);
    
    input.value = "";
  } else {
    
    
    
    document.querySelector(".score").innerHTML = count;
    document.querySelector(".citybox").innerHTML = `
    <h1 class="city"> Game Over!!! <br>
      You Scored ${count} <br>
      Auto Restart in 3 second 
      </h1>
      `;
    document.querySelector(".city").style.border = "4px solid red"
    input.value = "";
    setTimeout(() => {
      run();
      count = 0;
    }, 3000);
  }
   
};
