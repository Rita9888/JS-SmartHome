var addbuttonCond = document.getElementById("condAdd");
addbuttonCond.className = "condAdd";
var condModel = new Conditioner("LG", 25);
var viewCondModel = new ViewConditioner(condModel, document.getElementById("root"));
viewCondModel.render();
document.getElementsByClassName("cond")[0].style.display = "none";
addbuttonCond.addEventListener('click', function(){
   if(document.getElementsByClassName("cond")[0].style.display == "none"){
    document.getElementsByClassName("cond")[0].style.display = "block";
    document.getElementsByClassName("signal")[0].style.display ="none";
    document.getElementsByClassName("camer")[0].style.display ="none";
   }
   else{
       document.getElementsByClassName("cond")[0].style.display ="none";
   }
   
})

var addbuttonSign = document.getElementById("signAdd");
addbuttonSign.className = "signAdd";
var sign = new Signaling("FS");
var viewSign = new ViewSignaling(sign, document.getElementById("root"));
viewSign.render();
document.getElementsByClassName("signal")[0].style.display = "none";
addbuttonSign.addEventListener('click', function(){
    if(document.getElementsByClassName("signal")[0].style.display == "none"){
        document.getElementsByClassName("signal")[0].style.display = "block";
        document.getElementsByClassName("cond")[0].style.display ="none";
        document.getElementsByClassName("camer")[0].style.display ="none";
    }
    else{
        document.getElementsByClassName("signal")[0].style.display ="none";
    }
})

var addbuttonCam = document.getElementById("camAdd");
addbuttonCam.className = "signAdd";
var camera = new Camera("DGTT");
var viewCamera = new ViewCamera(camera, document.getElementById("root"));
viewCamera.render();
document.getElementsByClassName("camer")[0].style.display = "none";
addbuttonCam.addEventListener('click', function(){
    if(document.getElementsByClassName("camer")[0].style.display == "none"){
        document.getElementsByClassName("camer")[0].style.display = "block";
        document.getElementsByClassName("cond")[0].style.display ="none";
        document.getElementsByClassName("signal")[0].style.display ="none";
    }
    else{
        document.getElementsByClassName("camer")[0].style.display ="none";
    }
})