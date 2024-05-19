let name = document.getElementById("name");

let age = document.getElementById("age");

let trevel = document.getElementById("trevel");

let warning = document.getElementById("warning");

let form = document.getElementById("trevel_form");

let frBtn = document.getElementById("frBtn");

frBtn.addEventListener("click", function(){
  if(name.value === ""){
    warning.innerHTML = "you forget to enter something";
    warning.style.color = "red";
  }else if(age.value === ""){
    warning.innerHTML = "you forget to enter something";
    warning.style.color = "red";
  }else if(trevel.value === ""){
    warning.innerHTML = "you forget to enter something";
    warning.style.color = "red";
  }else{
    form.style.display = "none";
  
  }

})
