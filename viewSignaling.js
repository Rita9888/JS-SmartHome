function ViewSignaling(signaling, rootAdd){
    this._signaling = signaling;
    this._rootAdd = rootAdd;
    this._state = document.createElement("div");
}

ViewSignaling.prototype = Object.create(Service.prototype);
ViewSignaling.prototype.constructor = ViewSignaling;

ViewSignaling.prototype.stateChange = function(){
    if(this._signaling._state){
        this._state.innerHTML = "Сигнализация вкл";
    }
    else{
        this._state.innerHTML = "Сигнализация выкл";
    }
};

ViewSignaling.prototype.render = function(){
    var name = document.createElement("div");
    name.innerHTML = "Сигнализация";

    var signal = document.createElement("div");
    signal.className = "signal";

    var btnOn = document.createElement("button");
    btnOn.className = "signBtn";
    btnOn.innerHTML = "Включить";
    btnOn.addEventListener("click", () =>{
        this._signaling.on();
        this.stateChange();
    });

    var btnOff = document.createElement("button");
    btnOff.className = "signBtn";
    btnOff.innerHTML = "Выключить";
    btnOff.addEventListener("click", () =>{
        this._signaling.passwCheck();
        this.stateChange();
    });

    this.stateChange();
    signal.appendChild(name);
    signal.appendChild(this._state);
    signal.appendChild(btnOn);
    signal.appendChild(btnOff);
    this._rootAdd.appendChild(signal);
}

   