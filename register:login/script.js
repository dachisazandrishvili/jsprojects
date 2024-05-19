// register variables

let gmail = document.getElementById("regEmail");

let form1 = document.getElementById("register");

let pass = document.getElementById("regPass");

let neme = document.getElementById("regName");

let btn = document.getElementById("regBtn");


// lists
let listGmail = [];

let listPass = [];

let listPass2 = [];

let listGmail2 = [];
// adding event listener to registration 

btn.addEventListener("click" , function(){
  if(gmail.value === ""){
    form1.style.boxShadow = "20px 20px 20px red"
    gmail.style.backgroundColor = "red"
    gmail.placeholder = "გთხოვთ შეავსოთ"
  }else if(pass.value === ""){
    form1.style.boxShadow = "20px 20px 20px red"
    pass.style.backgroundColor = "red"
    pass.placeholder = "გთხოვთ შეავსოთ"
  }else if(neme.value === ""){
    form1.style.boxShadow = "20px 20px 20px red"
    neme.style.backgroundColor = "red"
    neme.placeholder = "გთხოვთ შეავსოთ"
    console.log("შეიყვანე სახელი")

  }else{
    listGmail.push(gmail.value);
    listPass.push(pass.value);
    gmail.value = "";
    pass.value = "";
    neme.value = "";
    gmail.placeholder = "enter your email";
    pass.placeholder = "set your password";
    neme.placeholder = "set your name";
    form1.style.boxShadow = "20px 20px 20px black";
    pass.style.backgroundColor = "black";
    neme.style.backgroundColor = "black";
    gmail.style.backgroundColor = "black"

  }
  
})

// Log in

let lgGmail = document.getElementById("logEmail");

let form2 = document.getElementById("logIn");

let lgPass = document.getElementById("logPass");

let txt = document.getElementById("warning");

let span = document.getElementById("span");

let btn2 = document.getElementById("lgn");

btn2.addEventListener("click" , function(){
  // for(let i = 0; i < listGmail.length; i++){
  //   if(lgGmail.value === listGmail[i].value){
  //     console.log("i")
  //   }}
  
    
  }
)

