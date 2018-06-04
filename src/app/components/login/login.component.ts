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
  alertRenderUserNotFound: boolean = false;
  alertRenderEmptyFields: boolean = false;

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
      this.alertRenderUserNotFound = true;
      //'User not found, please try again';
      setTimeout(()=>{
        this.alertRenderUserNotFound = false;
      }, 2000);
      return;
    }
    this.emitter.emit({
        home : true,
        user: data[0]
      }
    );
    localStorage.setItem('user', JSON.parse(data._body)[0].email);
  }

  login(){
    if (this.email === '' || this.password === '') {
      this.alertRenderEmptyFields = true;
      //'Please, fill the email and password field';
      setTimeout(()=>{
        this.alertRenderEmptyFields = false;
      }, 2000);
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
