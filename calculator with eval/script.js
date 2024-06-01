const button = document.getElementsByClassName("button");

const sum = document.getElementById("sum");

let equal = document.getElementById("equal");

let numArr = [];

let numStr = "";

for(let i = 0; i < button.length; i++){
  button[i].addEventListener("click", function(){
    
    if(button[i].innerHTML === "+" || button[i].innerHTML === "-" || button[i].innerHTML === "*" || button[i].innerHTML === "/" ){
      numArr.push(numStr)
      numArr.push(button[i].innerHTML)

      numStr = ""
    }else{
      numStr += button[i].innerHTML
      if(numArr.includes("+")){
        numArr[-1] = numStr
      }
    }
   
    console.log(numStr);
    console.log(numArr);
  })
}

equal.addEventListener("click", function(){
  // numArr.push(numStr);
  // console.log(numArr);
  // for(let i = 0; i < numArr.length; i++){
  //   console.log(numArr[i])
  // }
  console.log(numArr[numArr.length - 2])

})

// let newArr = [];

// newArr.push("")

// newArr[-1] += "ggg"
// console.log(newArr)