var addbuttonCond = document.getElementById("condAdd");
addbuttonCond.className = "condAdd";
addbuttonCond.addEventListener('click', function(){
    var condModel = new Conditioner("LG", 25);
    var viewCondModel = new ViewConditioner(condModel, document.getElementById("root"));
    viewCondModel.render();
})

var addbuttonSign = document.getElementById("signAdd");
addbuttonSign.className = "signAdd";
addbuttonSign.addEventListener('click', function(){
    var sign = new Signaling("FS");
    var viewSign = new ViewSignaling(sign, document.getElementById("root"));
    viewSign.render();
})

var addbuttonCam = document.getElementById("camAdd");
addbuttonCam.className = "signAdd";
addbuttonCam.addEventListener('click', function(){
    var camera = new Camera("DGTT");
    var viewCamera = new ViewCamera(camera, document.getElementById("root"));
    viewCamera.render();
})