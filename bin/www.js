"use strict";

const app = require("../app");


const port = (process.env.PORT || 5000);


app.listen(process.env.PORT, '0.0.0.0');
app.listen(port, () => {
    console.log("서버 가동");
}
)
"use strict";
//모듈
const express = require("express");

const app = express();
//라우팅
const home = require("./src/routes/home");

//앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use(express.static(`${__dirname}/src/public/`));

//body-parser 대신 express 이용하였음
app.use(express.json());
//URL을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함도리 경우 제대로 인식되지 않는 문제 해결
app.use(express.urlencoded({ extended: true }));
app.use("/", home);//use -> 미들 웨어를 등록해주는 메서드


module.exports = app;
