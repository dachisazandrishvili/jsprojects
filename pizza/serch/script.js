// serch

let serchLst = [];

// variables

let h1 = document.getElementById("h1");
let inp = document.getElementById("pizzaInput");
let btn = document.getElementById("btn");

let pizzas = document.getElementsByClassName("pizza");
for(let i of pizzas){
    serchLst.push(i.innerHTML)
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
    for(let i of m){
        // lstt.push(i)
        for(let c of serchLst2){
            for(let k of c){
                if(i === k){
                    pizzas[serchLst.indexOf(m)].style.display = "flex";
                }else{
                    // let ind = serchLst.indexOf();
                    pizzas.style.display = "none";
                }
            }
        }
    }
    // let loops = "";
    // for(i of lstt){
    //     loops += 1;
    // }
    // for(i of serchLst2){
    //     for(k of i){
    //         for(x of lstt){
    //             if(i === x){
    //                 lstt2.push(i)
    //             }
    //         }
    //     }
        
    // }
    // if(loopStr === loops){
    //     lstt2.push(loopStr)
    //     lstt2.push(true)
    // }else{
    //     lstt2.push(false)
    // }
    console.log(serchLst)
    console.log(lstt2)
})

