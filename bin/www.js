"use strict";

const app = require("../app");


const port = (process.env.PORT || 5000);


app.listen(process.env.PORT, '0.0.0.0');
app.listen(port, () => {
    console.log("서버 가동");
}
)