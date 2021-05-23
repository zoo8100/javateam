"use strict"



const id = document.querySelector("#id"),
    name = document.querySelector("#name"),
    confirmPsword = document.querySelector("#confirm-psword"), 
    password = document.querySelector("#password"),
    registerBtn = document.querySelector("#button");

registerBtn.addEventListener("click", register);

function register() {
    if (!id.value) {
        return alert("아이디는 필수 입력입니다.")
    };
    if (!password.value){ 
    return alert("비밀번호는 필수 입력입니다.")
    };
    if (password.value !== confirmPsword.value){
        return alert("비밀번호가 일치하지 않습니다.");
    };
    const req = {
        id: id.value,
        name: name.value,
        password: password.value,
       
 };
   

  //API 만들기
     fetch("/register", {
         method: "POST",
         headers: {
             "Content-Type": "application/json",
         },
         body: JSON.stringify(req),
     })
         .then((res) => res.json())
         .then((res) => {
             if (res.success) {
                 location.href = "/login";
             } else {
                 alert(res.msg);
             }
         })
         .catch((err) => {
             console.error(new Error("가입 중 에러가 발생하였습니다."));
         });
        }
