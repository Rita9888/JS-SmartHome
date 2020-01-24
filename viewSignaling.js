function ViewSignaling(signaling, rootAdd){
    this._signaling = signaling;
    this._rootAdd = rootAdd;
    this._state = document.createElement("div");
}

ViewSignaling.prototype = Object.create(Service.prototype);
ViewSignaling.prototype.constructor = ViewSignaling;

ViewSignaling.prototype.stateChange = function(){
    if(this._signaling._state){
        this._state.innerHTML = "Signaling: on";
    }
    else{
        this._state.innerHTML = "Signaling: off";
    }
};

ViewSignaling.prototype.render = function(){
    var name = document.createElement("h3");
    name.innerHTML = "Signaling";

    var signal = document.createElement("p");
    signal.className = "signal";

    var btnOn = document.createElement("button");
    btnOn.className = "on";
    btnOn.innerHTML = "ON";
    btnOn.addEventListener("click", () =>{
        this._signaling.on();
        this.stateChange();
    });

    var btnOff = document.createElement("button");
    btnOff.className = "off";
    btnOff.innerHTML = "OFF";
    btnOff.addEventListener("click", () =>{
        this._signaling.passwCheck();
        this.stateChange();
    });

    var content = document.getElementsByClassName("container")[0];
    content.appendChild(this._rootAdd);


    this.stateChange();
    signal.appendChild(name);
    signal.appendChild(this._state);
    signal.appendChild(btnOn);
    signal.appendChild(btnOff);
    this._rootAdd.appendChild(signal);
}

   