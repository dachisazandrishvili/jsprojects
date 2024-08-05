const button = document.getElementsByClassName("button");

const sum = document.getElementById("sum");

let equal = document.getElementById("equal");

let numArr = [];

let numStr = "";
 
let result 



for(let i = 0; i < button.length; i++){
  button[i].addEventListener("click", function(){
    
    if(button[i].innerHTML === "+" 
    || button[i].innerHTML === "-" || button[i].innerHTML === "*" || button[i].innerHTML === "/" ){
      if(numArr.includes("+")){
        numStr = ""
      }else{
        numArr.push(numStr)
        
      }
      
      numArr.push(button[i].innerHTML)
      numArr.push("")
      numStr = ""
    }else{
      numStr += button[i].innerHTML
      if(numArr.includes("+") || numArr.includes("-") || numArr.includes("*") || numArr.includes("/") ){
        numArr[numArr.length - 1] = numStr
        result = Number(numArr[numArr.length - 1]) + Number(numArr[numArr.length - 3])
        console.log(result)

      }
    }
    
    console.log(numStr);
    console.log(numArr);
  })
}

equal.addEventListener("click", function(){
  
  var s = ""
  var s2 = ""
  for(i of numArr){ 
    s += i
  }
  
  let h = []
  for(i of s){
    h.push(i)
  }
  h.pop()
  for(i of h){
    s2 += i
  }
  console.log(eval(s2))
  sum.innerHTML = eval(s2);
  numArr = []
  s2 = ""
  numStr = ""
  
})


// let newArr = [];
// newArr.push("")
// newArr[-1] += "ggg"
// console.log(newArr)