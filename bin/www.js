"use strict";

const app = require("../app");


const PORT = process.env.port || 4000;


app.listen(PORT, () => {
    console.log("서버 가동");
}
)