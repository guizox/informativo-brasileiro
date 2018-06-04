import { Component, OnInit, EventEmitter, Output, Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
@Injectable()
export class LoginComponent implements OnInit {
  private url: string = "http://yfipassword.000webhostapp.com/server/YFiPassword/php/UserService.php?metodo=logar&email=";
  forgotPasswordClicked: boolean = false;
  registerClicked: boolean = false;
  @Output() emitter = new EventEmitter();
  email: string = '';
  password: string = '';

  onForgotPassword() {
    this.forgotPasswordClicked = true;
    this.emitter.emit({
        forgotPassword : this.forgotPasswordClicked
      }
    );
  }

  onRegisterClick() {
    this.registerClicked = true;
    this.emitter.emit({
        register : this.registerClicked
      }
    );
  }

  callBack(data){
    if (!JSON.parse(data._body)[0]){
      alert('User not found, please try again');
      return;
    }
    this.emitter.emit({
        home : true,
        user: data[0]
      }
    );
    localStorage.setItem('user', data[0].email);
  }

  login(){
    if (this.email === '' || this.password === '') {
      alert('Please, fill the email and password field');
      return;
    }
    this.http.get(this.url + this.email + "&senha=" + this.password)
    .subscribe(data => this.callBack(data)

    );
  }
  constructor(
    private http: Http
  ) { }

  ngOnInit() {
  }

}
