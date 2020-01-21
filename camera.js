function Camera(model){
    Service.call(this, model);
    this._stateCamera = state;
    this._recordType = recordType;
    this._recordMode = recordMode;

    this.on = function(){
        this._stateCamera = true;
    }

    this.off = function(){
        this._stateCamera = false;
    }

   this.record = function(){
       if((this._state == true) && (this._stateCamera == true)){
           this._recordType = true;
           alert('Включен тип записи "record"');
       }
   }

   this.live = function(){
        if((this._state == true) && (this._stateCamera == true)){
            this._recordType = false;
            alert('Включен тип записи "live"');
        }
    }

    this.dayMode = function(){
        if((this._state == true) && (this._stateCamera == true)){
            this._recordMode = true;
            alert('Включен дневной режим записи');
        }
    }

    this.nightMode = function(){
        if((this._state == true) && (this._stateCamera == true)){
            this._recordMode = false;
            alert('Включен ночной режим записи');
        }
    }

    this.getState = function(){
        return this._stateCamera;
    }

    this.getRecordType = function(){
        return this._recordType;
    }

    this.getRecordMode = function(){
        return this.recordMode;
    }

}