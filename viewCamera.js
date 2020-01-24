function ViewCamera(camera, rootAdd){
    this._camera = camera;
    this._rootAdd = rootAdd;
    this._state = document.createElement("div");
}

ViewCamera.prototype = Object.create(Camera.prototype);
ViewCamera.prototype.constructor = ViewCamera;

ViewCamera.prototype.stateChange = function(){
    if(this._camera._state){
        this._state.innerHTML = "Camera: on";
    }
    else{
        this._state.innerHTML = "Camera: off";
    };
};

ViewCamera.prototype.render = function(){
    var name = document.createElement("h3");
    name.innerHTML = "Camera";

    var camer = document.createElement("div");
    camer.className = "camer";

    var type = document.createElement("p");
    type.innerHTML = "Record type: " + this._camera._recordType;

    var mode = document.createElement("p");
    mode.innerHTML = "Record mode: " + this._camera._recordMode;

    var onBtn = document.createElement("button");
    onBtn.type = "button";
    onBtn.className = "on";
    onBtn.innerHTML = "ON";
    onBtn.addEventListener('click', () =>{
        this._camera.on();
        this.stateChange();
    });

    var offBtn = document.createElement("button");
    offBtn.type = "button";
    offBtn.className = "off";
    offBtn.innerHTML = "OFF";
    offBtn.addEventListener('click', () =>{
        this._camera.off();
        this.stateChange();
    });

    var record = document.createElement("button");
    record.type = "button";
    record.className = "record";
    record.innerHTML = "Record";
    record.addEventListener('click', () =>{
        this._camera.record();
        this.stateChange();
        type.innerHTML = "Record type: " + this._camera._recordType;
    });

    var live = document.createElement("button");
    live.type = "button";
    live.className = "live";
    live.innerHTML = "Live";
    live.addEventListener('click', () =>{
        this._camera.live();
        this.stateChange();
        type.innerHTML = "Record type: " + this._camera._recordType;
    });

    var day = document.createElement("button");
    day.type = "button";
    day.className = "day";
    day.innerHTML = "Day mode";
    day.addEventListener('click', () =>{
        this._camera.dayMode();
        this.stateChange();
        mode.innerHTML = "Record mode: " + this._camera._recordMode;
    });

    var night = document.createElement("button");
    night.type = "button";
    night.className = "night";
    night.innerHTML = "Night mode";
    night.addEventListener('click', () =>{
        this._camera.nightMode();
        this.stateChange();
        mode.innerHTML = "Record mode: " + this._camera._recordMode;
    });

    var content = document.getElementsByClassName("container")[0];
    content.appendChild(this._rootAdd);

    this.stateChange();
    camer.appendChild(name);
    camer.appendChild(type);
    camer.appendChild(mode);
    camer.appendChild(this._state);
    camer.appendChild(onBtn);
    camer.appendChild(offBtn);
    camer.appendChild(record);
    camer.appendChild(live);
    camer.appendChild(day);
    camer.appendChild(night);
    this._rootAdd.appendChild(camer);
}