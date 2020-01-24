function Camera(model){
    Service.call(this, model);
    this._recordType = "";
    this._recordMode = "";
}

    Camera.prototype = Object.create(Service.prototype);
    Camera.prototype.constructor = Camera;

    Camera.prototype.record = function(){
       if(this._state){
           this._recordType = "Record";
       }
   }

   Camera.prototype.live = function(){
        if(this._state){
            this._recordType = "Live";
        }
    }

    Camera.prototype.dayMode = function(){
        if(this._state){
            this._recordMode = "Day";
        }
    }

    Camera.prototype.nightMode = function(){
        if(this._state){
            this._recordMode = "Night";
        }
    }

    Camera.prototype.getRecordType = function(){
        return this._recordType;
    }

    Camera.prototype.getRecordMode = function(){
        return this.recordMode;
    }

