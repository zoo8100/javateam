"use strict"


const id = document.querySelector("#id"),
password = document.querySelector("#password"),
loginBtn = document.querySelector("button")

loginBtn.addEventListener("click", login);

function login() {
  const req = {
      id: id.value,
      password: password.value,
  };

//   console.log(req);
//   console.log(JSON.stringify(req));
  //API 만들기
fetch("/login", {
    method:"POST",
    headers:{
        "Content-Type":"application/json",
    },
    body: JSON.stringify(req),
})
.then((res)=> res.json())
.then((res)=> {
    if (res.success){
        location.href="/";
    } else {
        alert(res.msg);
    }
    });
}


 
