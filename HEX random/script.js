function randomHex(){
  let hexLst = ["0", "1", "2", "3", "4", "5", "6" , "7", "8", "9","A","B","C", "D" ,"E", "F"];

  let hex = "#"

  let body = document.getElementById("main");
  let txt = document.getElementById("hh")

  for(let i = 0; i < 6; i++){
    let rend = Math.random() * hexLst.length;

    let chose = Math.floor(rend);
    hex += hexLst[chose];
  }
  body.style.backgroundColor = hex;
  txt.innerHTML = hex;
}

let btn = document.getElementById("btn");

btn.addEventListener("click" , function(){
  randomHex()

})
