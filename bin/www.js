"use strict";

const app = require("../src/app");


const PORT = process.env.port || 4000;


app.listen(PORT, () => {
    console.log("서버 가동");
}
)