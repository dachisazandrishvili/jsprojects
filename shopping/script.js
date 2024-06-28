function Obj(src,hdr,txt,price){
  this.src = src,
  this.hdr = hdr,
  this.txt = txt,
  this.price = price

}


// log in variables
let lgEmail = document.getElementById("lgEmail");

let lgPass = document.getElementById("lgPass");

let reg = document.getElementById("reg");

let form = document.getElementById("login");

let regForm = document.getElementById("register");

let loginWar = document.getElementById("loginWar");
// adding event listener to

reg.addEventListener("click", function(){
  form.style.display = "none";
  regForm.style.display = "flex";
})
// account variable
let accounts = [];

function User(email,password){
  this.email = email,
  this.password = password
}



// register variables


let regGmail = document.getElementById("regGmail");

let regPass = document.getElementById("regPass");

let regPass2 = document.getElementById("name");

let logBtn = document.getElementById("logBtn");

let logTxt = document.getElementById("logTxt");

let lgWarning = document.getElementById("warning2");

let logBtn1 = document.getElementById("lgBtn");



// main page variables

let header = document.getElementById("header");

let main = document.getElementById("webDiv");



logBtn.addEventListener("click", function(){
  if(regGmail.value === "" ){
    lgWarning.innerHTML = "you forget to enter something"
    lgWarning.style.color = "red";

  }else if(regPass.value === ""){
    lgWarning.innerHTML = "you forget to enter something"
    lgWarning.style.color = "red";

  }else if(regPass2.value === ""){
    lgWarning.innerHTML = "you forget to enter something"
    lgWarning.style.color = "red";
  }else if(regPass.value != regPass2.value){
    lgWarning.innerHTML = "your password is inncorect"
    lgWarning.style.color = "red";

  }else{
    let obj = new User(regGmail.value,regPass.value);
    accounts.push(obj);
    regGmail.value  = "";
    regPass.value  = "";
    regPass2.value = "";
    lgWarning.value = "";
    regForm.style.display = "none";
    form.style.display = "flex";
    console.log(accounts)
  }
})





logTxt.addEventListener("click", function(){
  if(regGmail.value === "" ){
    lgWarning.innerHTML = "you forget to enter something"
    lgWarning.style.color = "red";

  }else if(regPass.value === ""){
    lgWarning.innerHTML = "you forget to enter something"
    lgWarning.style.color = "red";

  }else if(regPass2.value === ""){
    lgWarning.innerHTML = "you forget to enter something"
    lgWarning.style.color = "red";
  }else if(regPass.value != regPass2.value){
    lgWarning.innerHTML = "your password is inncorect"
    lgWarning.style.color = "red";

  }else{
    accounts.push(new User(regGmail.value,regPass.value));
    regGmail.placeholder  = "enter your email";
    regPass.placeholder  = "set your password";
    regPass2.placeholder = "confirm your password";
    lgWarning.innerHTML = "";
    regForm.style.display = "none";
    form.style.display = "flex";
  }  
})


logBtn1.addEventListener("click", function(){
  if(lgEmail.value === "" || lgPass.value === ""){
    loginWar.innerHTML = "you forgot to enter something"
    loginWar.style.color = "red"
  }else{
    for(let i = 0; i < accounts.length; i++){
      if(accounts[i].email === lgEmail.value & accounts[i].password=== lgPass.value){
        form.style.display = "none";
        regForm.style.display = "none";
        header.style.display = "flex";
        home.style.display = "flex";
  
        }else{
          loginWar.innerHTML = "your email or password may incorrect"
          loginWar.style.color = "red"
        }
      }
    }

  }
 

)
let sgn = document.getElementById("SignIn");
let sgu = document.getElementById("SignUp");

sgn.addEventListener("click",function(){
  form.style.display = "flex"
})

let btnc = document.getElementsByClassName("crt");

let element = document.getElementById("elmn");

let shopDiv = document.getElementsByClassName("div");

let Shop = document.getElementById("shop");
let Elem = document.getElementById("elmn");
let elemChild = document.getElementById("elemChild1");

Elem.style.border =  "1px solid black";
let cartP = document.getElementById("cartP");


let crrDvv = document.getElementById("crrDvv");


let img = document.getElementsByClassName("img");
let counter = 0;

let ctt = document.getElementById("ctt");
for(let i = 0; i < btnc.length; i++){
  btnc[i].addEventListener("click",function(){
    counter += 1
    crrDvv.style.display = "flex";
    cartP.innerHTML = counter;
    Elem.style.display = "none";
    Shop.style.display = "grid";
    let img = shopDiv[i].firstChild.nextElementSibling;     
    let h2 = shopDiv[i].firstChild.nextElementSibling.nextElementSibling.firstChild.nextElementSibling;
    let p = shopDiv[i].firstChild.nextElementSibling.nextElementSibling.firstChild.nextElementSibling.nextElementSibling.firstChild.nextElementSibling;
    let price = shopDiv[i].firstChild.nextElementSibling.nextElementSibling.firstChild.nextElementSibling.nextElementSibling.firstChild.nextElementSibling.nextElementSibling.firstChild.nextElementSibling;
    let btn = shopDiv[i].firstChild.nextElementSibling.nextElementSibling.firstChild.nextElementSibling.nextElementSibling.firstChild.nextElementSibling.nextElementSibling.firstChild.nextElementSibling.nextElementSibling;
    let divv = document.createElement("div");
    ctt.appendChild(divv)
    let imgg = document.createElement("img");
    imgg.src = img.src;
    divv.appendChild(imgg);
    divv.style.border = "1px solid black";
    divv.style.height = "100px";
    divv.style.width = "700px";
    divv.style.borderRadius= "20px";
    divv.style.display = "flex";
    imgg.style.width = "100px";
    imgg.style.height = "100px";
    divv.style.display = "flex";
    divv.style.justifyContent = "space-around";
    divv.style.alignItems = "center";
    let PP = document.createElement("p");
    PP.innerHTML = p.innerHTML;
    PP.style.fontSize = "10px"
    divv.appendChild(PP);
    let Pricce = document.createElement("h2");
    Pricce.innerHTML = price.innerHTML;
    divv.appendChild(Pricce);
    Pricce.style.fontSize = "15px"
    let buyBtn = document.createElement("button");
    buyBtn.style.width = "50px";
    buyBtn.style.height = "30px";
    buyBtn.innerHTML = "Buy";
    buyBtn.style.backgroundColor = "orange";
    buyBtn.style.border = "none";
    buyBtn.style.borderRadius = "20px";
    buyBtn.style.cursor = "pointer";
    divv.style.backgroundColor = "whitesmoke"
    divv.appendChild(buyBtn);
    document.getElementById("x").addEventListener("click",function(){
      divv.style.display = "none"
      counter = 0;
      crrDvv.style.display = "none";
      cc.style.display = "none";
    })
  })
}

let h1 = document.getElementById("h1");
let pr = document.getElementById("pr");
let prss = document.getElementById("price");
let slider = document.getElementById("slider");
for(let i = 0; i < shopDiv.length; i++){
    img[i].addEventListener("click",function(){
    let img = shopDiv[i].firstChild.nextElementSibling;     
    let h2 = shopDiv[i].firstChild.nextElementSibling.nextElementSibling.firstChild.nextElementSibling;
    let p = shopDiv[i].firstChild.nextElementSibling.nextElementSibling.firstChild.nextElementSibling.nextElementSibling.firstChild.nextElementSibling;
    let price = shopDiv[i].firstChild.nextElementSibling.nextElementSibling.firstChild.nextElementSibling.nextElementSibling.firstChild.nextElementSibling.nextElementSibling.firstChild.nextElementSibling;
    let btn = shopDiv[i].firstChild.nextElementSibling.nextElementSibling.firstChild.nextElementSibling.nextElementSibling.firstChild.nextElementSibling.nextElementSibling.firstChild.nextElementSibling.nextElementSibling;
    console.log(btn)
    Elem.style.display = "flex";
    Shop.style.display = "none";
    slider.style.display = "none";
    let img2 = document.createElement("img");
    img2.src = img.src;
    img2.style.width = "480px";
    img2.style.height = "400px";
    img2.style.borderRadius = "20px";
    elemChild.appendChild(img2);
    let H2 = document.createElement("h2");
    H2.innerHTML = h2.innerHTML;
    h1.appendChild(H2);
    let P = document.createElement("p");
    P.innerHTML = p.innerHTML;
    pr.appendChild(P);
    Elem.appendChild(elemChild);
    let Price = document.createElement("h2");
    Price.innerHTML = price.innerHTML;
    prss.appendChild(Price);
    Elem.style.justifyContent = "space-around";
    Elem.style.alignItems = "center";
    elemChild.style.display = "flex";
    elemChild.style.flexDirection = "column";
    elemChild.style.gap = "5px";
  })
  
}

Elem.addEventListener("click",function(){
  Shop.style.display = "grid"
  slider.style.display = "flex";
  Elem.style.display = "none"
  h1.innerHTML = ""
  pr.innerHTML = ""
  prss.innerHTML = ""
  elemChild.innerHTML = ""
  
})




let lst = []
for(let i = 0; i < img.length; i++){
  lst.push(img[i].src)
}


let imgg = document.getElementById("imgg");

let ind = 0;
console.log(lst)

setInterval(function(){
  ind--;
  if(ind < 0){
    ind = lst.length - 1
  }
  if(imgg.src = "undefined"){
    imgg.src = "beats.png"
  }
  imgg.src = lst[ind]
},2000);

let hdr = document.getElementById("hdr")
let ct = document.getElementById("ct");
let cc = document.getElementById("cc");
document.getElementById("carrt").addEventListener("click",function(){
  cc.style.display = "flex";
  ctt.style.display = "flex";
  cc.style.flexDirection = "column";
})

