function ViewConditioner(conditioner, rootAdd){
    this._conditioner = conditioner;
    this._rootAdd = rootAdd;
    this._state = document.createElement("div");
}

ViewConditioner.prototype = Object.create(Service.prototype);
ViewConditioner.prototype.constructor = ViewConditioner;

ViewConditioner.prototype.stateChange = function(){
    if(this._conditioner._state){
        this._state.innerHTML = "Conditioner: on";
    }
    else{
        this._state.innerHTML = "Conditioner: off";
    };
};

ViewConditioner.prototype.render = function(){
    var name = document.createElement("h3");
    name.innerHTML = "Conditioner";

    var temp = document.createElement("p");
    temp.innerHTML = this._conditioner._currentTemperature +"°C";
    temp.className = "temp";
        
    var condition = document.createElement("div");
    condition.className = "cond";

    var model = document.createElement("p");
    model.innerHTML = "Model: " + this._conditioner._model;

    var onBtn = document.createElement("button");
    onBtn.type = "button";
    onBtn.className = "on";
    onBtn.innerHTML = "ON";
    onBtn.addEventListener('click', () =>{
        this._conditioner.on();
        this.stateChange();
    });

    var offBtn = document.createElement("button");
    offBtn.type = "button";
    offBtn.className = "off";
    offBtn.innerHTML = "OFF";
    offBtn.addEventListener('click', () =>{
        this._conditioner.off();
        this.stateChange();
    });

    var plusTemperature = document.createElement("button");
    plusTemperature.type = "button";
    plusTemperature.className = "plus_temp";
    plusTemperature.innerHTML = "+";
    plusTemperature.addEventListener('click', () =>{
        this._conditioner.plusTemp();
        temp.innerHTML = this._conditioner._currentTemperature +"°C";
    })

    var minusTemperature = document.createElement("button");
    minusTemperature.type = "button";
    minusTemperature.className = "minus_temp";
    minusTemperature.innerHTML = "-";
    minusTemperature.addEventListener('click', () =>{
        this._conditioner.minusTemp();
        temp.innerHTML = this._conditioner._currentTemperature +"°C";
    });

    var content = document.getElementsByClassName("container")[0];
    content.appendChild(this._rootAdd);

    this.stateChange();
    condition.appendChild(name);
    condition.appendChild(model);
    condition.appendChild(this._state);
    condition.appendChild(temp);
    condition.appendChild(onBtn);
    condition.appendChild(offBtn);
    condition.appendChild(plusTemperature);
    condition.appendChild(minusTemperature);
    this._rootAdd.appendChild(condition);

}