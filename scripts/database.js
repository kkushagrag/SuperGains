let express=require("express")
let cors = require("cors");
let  mysql=require("mysql")

let app=express();
app.use(express.json())
app.use(cors());
app.listen(3000)



const connectmysl=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"1234",

})

connectmysl.connect(err=>{
    if(err)console.log(err);
    else console.log("connect");
})

app.get('/get', (req, res, next)=>{
    let id = res.body.id;
    
    connectmysl.query("select * from web.product where id=?",id,(err,rese)=>{
        if(err){
            console.log(err);
            res.end()
    }else
    {
        console.log(rese);
        res.end()
    }}
    )
  
})



app.post('/postImage', (req, res, next)=>{
    let obj={
        "name":"amit"
    }
    connectmysl.query("insert into web.product set ?",obj,(err,rese)=>{
        if(err){
            console.log(err);
            res.end()
    }else
    {
        console.log(rese);
        res.end()
    }})
})
