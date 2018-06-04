import { Component, OnInit, EventEmitter, Output, Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
@Injectable()
export class RegisterComponent implements OnInit {

  email: string = '';
  password: string = '';
  nome: string = '';
  url: string = "http://yfipassword.000webhostapp.com/server/YFiPassword/php/UserService.php?metodo=registrar&email=";
  @Output() emitter = new EventEmitter;


  callBack(data){
    if (data.result){
      alert('Welcome to Lance a Lance!');
      window.localStorage.setItem('user', data[0]);
      window.location.href = 'http://localhost/lancealance/todososjogos.php'
    }
  }

  registerClick() {
    if (this.email === '' || this.password === '' || this.nome === '') {
      alert('Please, fill the email and password and name fields');
      return;
    }
    console.log(this.url + this.email + "&senha=" + this.password + "&nome_completo="+this.nome);
    this.http.get(this.url + this.email + "&senha=" + this.password + "&nome_completo="+this.nome)
    .subscribe(data => this.callBack(<any>data.json)

    );
  }

  onDestroyRegisterComponent() {
    this.emitter.emit({renderLogin : true});
  }

  constructor(private http: Http) { }

  ngOnInit() {
  }

}
