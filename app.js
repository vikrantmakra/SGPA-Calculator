const express=require("express");
const bodyParser=require("body-parser");

const app=express();

app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
    res.sendFile(__dirname+"/firstPage.html")
});

app.post("/",function(req,res){
    var sem=(req.body.sem);
    console.log(sem);
    if(sem==2){
       res.redirect("/firstYear");
    

    }else{
        res.send("Enter A Valid Even Sem")
    }
});

app.get("/firstYear",function(req,res){

      res.sendFile(__dirname+"/firstYear.html")

});
app.post("/firstYear",function(req,res){

    var S1=req.body.sub1;
    var S2=req.body.sub2;
    var S3=req.body.sub3;
    var S4=req.body.sub4;
    var S5=req.body.sub5;
    var S6=req.body.sub6;
    var S7=req.body.sub7;
    var S8=req.body.sub8;
    var psem=req.body.psem;

    console.log(S1,S2,S3,S4,S5,S6,S7,S8,psem);

   
});


app.listen(3000,function(){
    console.log("Server up and runing at port 3000");
});