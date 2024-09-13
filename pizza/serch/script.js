// serch

let serchLst = [];
let serchLst1 = [];

// variables

let h1 = document.getElementById("h1");
let inp = document.getElementById("pizzaInput");
let btn = document.getElementById("btn");

let pizzas = document.getElementsByClassName("pizza");
for(let i of pizzas){
    serchLst.push(i.innerHTML)
}
for(let i of pizzas){
    serchLst1.push(i)
}
let serchLst2 = [];

let loopLst;
for(i of serchLst){
    loopLst = []
    
    for(let m of i){
        loopLst.push(m)
    }
    serchLst2.push(loopLst)
}




btn.addEventListener("click",function(){
    let m = inp.value;   
    let lstt = [];
    let lstt2 = [];
    let count = 0;
    for(let i of m){
        // lstt.push(i)
        lstt.push(i)
    }
    let lll = []
    for(let i of serchLst){
        if(i != m){
            serchLst1[serchLst.indexOf(i)].style.visibility = "hidden";
        }else{
            serchLst1[serchLst.indexOf(i)].style.visibility = "visible";
        }
        
    }
  
    console.log(lll)
    
    
})

