let dv = document.getElementsByClassName("dv");
let dv2 = document.getElementsByClassName("dv2");
for(let i = 0; i< dv.length; i++){
  dv[i].style.visibility = "hidden";
  dv2[i].style.visibility = "hidden";
}


// matrix
let matrixLst = [];

// const matrix1 = [[false,false,false],[false,true,false],[false,false,false]];
// const matrix2 = [[false,true,false],[false,false,false],[false,true,false]];
// const matrix3 = [[true,false,false],[false,true,false],[false,false,true]];
// const matrix4 = [[true,false,true],[false,false,false],[true,false,true]];
// const matrix5 = [[true,false,true],[false,true,false],[true,false,true]];
// const matrix6 = [[true,false,true],[true,false,true],[true,false,true]];

const matrix1 = [false,false,false,false,true,false,false,false,false];
const matrix2 = [false,true,false,false,false,false,false,true,false];
const matrix3 = [true,false,false,false,true,false,false,false,true];
const matrix4 = [true,false,true,false,false,false,true,false,true];
const matrix5 = [true,false,true,false,true,false,true,false,true];
const matrix6 = [true,false,true,true,false,true,true,false,true];
matrixLst.push(matrix1);
matrixLst.push(matrix2);
matrixLst.push(matrix3);
matrixLst.push(matrix4);
matrixLst.push(matrix5);
matrixLst.push(matrix6);



let btn = document.getElementById("btn");

var count = 0;
var count1 = 0;

btn.addEventListener("click",function(){
  let p1 =  Math.floor(Math.random() * 6);
  let p2 =  Math.floor(Math.random() * 6);
  
  
  let pp1 = matrixLst[p1];
  let pp2 = matrixLst[p2];
  for(let i =0; i < pp1.length; i++){
  
    if(pp1[i] === true){
      dv[i].style.visibility = "visible";
      count += 1
      
    }else{
      dv[i].style.visibility = "hidden";
      
    }
    
  }
  console.log(count + " player1");
  
  count = 0;
  for(let i = 0; i < pp2.length; i++){
    // dv[i].style.visibility = "hidden";
    // dv2[i].style.visibility = "hidden";
    if(pp2[i] === true){
      dv2[i].style.visibility = "visible";
      count1 += 1
      
    }else{
      dv2[i].style.visibility = "hidden";
      
    }
  }
  
  console.log(count1 + " player2")
  
  count1 = 0;
  
})