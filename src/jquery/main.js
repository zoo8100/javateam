


const http =require("http");
const app= http.createServer((req, res) => {
    console.log(req.url);
});

app.listen(3000, () =>{
    console.log("http로 가동된 서버입니다.");
}
)