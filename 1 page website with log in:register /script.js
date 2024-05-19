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
    accounts.push(new User(regGmail.value,regPass.value));
    regGmail.value  = "";
    regPass.value  = "";
    regPass2.value = "";
    lgWarning.value = "";
    regForm.style.display = "none";
    form.style.display = "flex";
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
  for(let i = 0; i < accounts.length; i++){
    if(accounts[i].email === lgEmail.value & accounts.password[i]=== lgPass.value){
      form.style.display = "none";
      regForm.style.display = "none";
      header.style.display = "flex";
      main.style.display = "flex";

      }
    }
  }

)




