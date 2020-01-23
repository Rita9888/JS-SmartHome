function Signaling(model){
    Service.call(this, model);
    this._password = "password";
}    
   

Signaling.prototype = Object.create(Service.prototype);
Signaling.prototype.constructor = Signaling;    

Signaling.prototype.passwCheck = function(){
    this._password = prompt("Введите пороль: ");
        for(i=1; i < 3; i++){
            if (this._password == 'password') {
                this.off();
                alert('Сигнализация выкл');
                break;
            } 
            else if ((this._password != 'password') && (i != 3)) {
                prompt('Пароль введен неверно! Попробуйте еще раз: ');
            } 
            else{
                alert('Сигнализация вкл');
                this.on();
            }
        }
}   

 Signaling.prototype.getPassword = function(){
    return this._password;
}  

