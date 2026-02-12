
const para = document.querySelector("p");
const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const text = para.innerText;

let iteration = 0;
function randomText(){
  const str = text.split("").map((char , index) =>{
    if (index < iteration){
      return char
    }
    return characters.split("")[Math.floor(Math.random() *53)]
  }).join("")
  console.log(str)
  para.innerText = str;
  iteration += 0.15;
  console.log(iteration)
}
setInterval(randomText,50)