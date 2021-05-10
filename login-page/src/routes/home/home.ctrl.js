"use strict";


const output={

 hello : (req, res) => {
        res.render("home/index");
    },
 login : (req, res) => {
        res.render("home/login");
    },
}

const users = {
    id: ["hyejuChoi", "hyunjinO", "joonbuUni"],
    password: ["1111", "1111", "1234"],
};

const process = {
    login: (req, res) => {
        const id = req.body.id,
        password = req.body.password;

        if (users.id.includes(id)) {
            const idx =users.id.indexOf(id);
            if (users.password[idx] === password){
                return res.json({
                    success: true,
                });
            }
        }
        return res.json({
            success: false,
            msg: "로그인에 실패하셨습니다.",
        });
    },
};

module.exports ={
  output,
  process
};