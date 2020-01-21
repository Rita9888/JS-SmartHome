function Signaling(model){
    Service.call(this, model);
    this._stateSign = state;
    this._password = password;
   

    this.on = function(){
        this._stateSign = true;
    }

    this.off = function(){
        this._stateSign = false;
    }

    this.passwChek = function(){
        for(i=0; i < 3; i++){
            this._password = prompt("Введите пороль: ");
            if (this._password == 'password') {
                this.off;
                console.log('Сигнализация выкл');
                break;
            } 
            else if ((this._password != 'password') && (i != 3)) {
                console.log('Пароль введен неверно! Попробуйте еще раз: ');
            } 
            else {
                this.on;
                console.log('Сигнализация вкл');
            }
        }

        this.getState = function(){
            return this._stateSign;
        }

        this.getPassword = function(){
            return this._password;
        }
    }  

}
