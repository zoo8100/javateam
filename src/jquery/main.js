

const port = (process.env.PORT || 8080);
const http =require("http");
const app= http.createServer((req, res) => {
    console.log(req.url);
});

app.listen(port, () =>{
    console.log("http로 가동된 서버입니다.");
}
)