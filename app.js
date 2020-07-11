const express=require("express");
const bodyParser=require("body-parser");

const app=express();

app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
    res.sendFile(__dirname+"/firstPage.html")
});

app.post("/",function(req,res){
    var sem=(req.body.sem);
    var branch=req.body.branch;
    console.log(sem);
    console.log(branch);
    if(sem==2){
       res.redirect("/firstYear");
    }
    if(sem==4 && (branch=="CS"||branch=="IS")){
        res.redirect("/secondYearCS")
    }if(sem==4 && branch=="EC"){
        res.redirect("/secondYearEC");
    }if(sem==4 && branch=="EE"){
        res.redirect("/secondYearEE");
    }if(sem==4 && branch=="ME"){
        res.redirect("/secondYearME")
    }if(sem==4 && branch=="CV"){
        res.redirect("/secondYearCV")
    }
    else{
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
    res.send("Marks posted");
 
});

app.get("/secondYearCS",function(req,res){

    res.sendFile(__dirname+"/secondYearCS.html")
});

app.post("/secondYearCS",function(req,res){

    var S1=req.body.sub1;
    var S2=req.body.sub2;
    var S3=req.body.sub3;
    var S4=req.body.sub4;
    var S5=req.body.sub5;
    var S6=req.body.sub6;
    var S7=req.body.sub7;
    var S8=req.body.sub8;
    var S9 =req.body.sub9;
    var psem=req.body.psem;

    console.log(S1,S2,S3,S4,S5,S6,S7,S8,S9,psem);
    res.send("Marks posted");
});

app.get("/secondYearEC",function(req,res){

    res.sendFile(__dirname+"/secondYearEC.html")
});

app.post("/secondYearEC",function(req,res){

    var S1=req.body.sub1;
    var S2=req.body.sub2;
    var S3=req.body.sub3;
    var S4=req.body.sub4;
    var S5=req.body.sub5;
    var S6=req.body.sub6;
    var S7=req.body.sub7;
    var S8=req.body.sub8;
    var S9 =req.body.sub9;
    var psem=req.body.psem;

    console.log(S1,S2,S3,S4,S5,S6,S7,S8,S9,psem);
    res.send("Marks posted");
});

app.get("/secondYearEE",function(req,res){

    res.sendFile(__dirname+"/secondYearEE.html")
});

app.post("/secondYearEE",function(req,res){

    var S1=req.body.sub1;
    var S2=req.body.sub2;
    var S3=req.body.sub3;
    var S4=req.body.sub4;
    var S5=req.body.sub5;
    var S6=req.body.sub6;
    var S7=req.body.sub7;
    var S8=req.body.sub8;
    var S9 =req.body.sub9;
    var psem=req.body.psem;

    console.log(S1,S2,S3,S4,S5,S6,S7,S8,S9,psem);
    res.send("Marks posted");
});

app.get("/secondYearME",function(req,res){

    res.sendFile(__dirname+"/secondYearME.html")
});

app.post("/secondYearME",function(req,res){

    var S1=req.body.sub1;
    var S2=req.body.sub2;
    var S3=req.body.sub3;
    var S4=req.body.sub4;
    var S5=req.body.sub5;
    var S6=req.body.sub6;
    var S7=req.body.sub7;
    var S8=req.body.sub8;
    var S9 =req.body.sub9;
    var psem=req.body.psem;

    console.log(S1,S2,S3,S4,S5,S6,S7,S8,S9,psem);
    res.send("Marks posted");
});

app.get("/secondYearCV",function(req,res){

    res.sendFile(__dirname+"/secondYearCV.html")
});

app.post("/secondYearCV",function(req,res){

    var S1=req.body.sub1;
    var S2=req.body.sub2;
    var S3=req.body.sub3;
    var S4=req.body.sub4;
    var S5=req.body.sub5;
    var S6=req.body.sub6;
    var S7=req.body.sub7;
    var S8=req.body.sub8;
    var S9 =req.body.sub9;
    var psem=req.body.psem;

    console.log(S1,S2,S3,S4,S5,S6,S7,S8,S9,psem);
    res.send("Marks posted");
});





app.listen(3000,function(){
    console.log("Server up and runing at port 3000");
});