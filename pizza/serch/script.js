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
    for(let i of serchLst2){
        for(let m of i){
            for(let c = 0; c < lstt.length; c++){
            
                if(m === lstt[c]){
                    count += 1
                }
                lll.push(count)
                
            }
        }
        
    }
    console.log(lll)
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
    
})

