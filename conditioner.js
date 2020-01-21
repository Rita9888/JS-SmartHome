function Conditioner(model, currentTemperature){
    Service.call(this, model);
    this._currentTemperature = currentTemperature;

    this.plusTemp = function(){
        if((this._currentTemperature < 25) && (this._state == true)){
            currentTemperature += 2;
        }
    }

    this.minusTemp = function(){
        if((this._currentTemperature > -10) && (this._state == true)){
            currentTemperature -= 2;
        }
    }

    this.getCurrentTemperature = function(){
        return this._currentTemperature;
    }
}


