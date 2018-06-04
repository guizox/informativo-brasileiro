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
  alertRenderSuccess: boolean = false;
  alertRenderError: boolean = false;

  callBack(data){
    if (JSON.parse(data._body)){
      this.alertRenderSuccess = true;
      this.emitter.emit({
          home : true,
          user: this.email
        }
      );
      window.localStorage.setItem('user', this.email);
      setTimeout(()=>{
        this.alertRenderSuccess = false;
        document.location.reload();
      }, 2000);

    }
  }

  registerClick() {
    if (this.email === '' || this.password === '' || this.nome === '') {
      this.alertRenderError = true;
      setTimeout(()=>{
        this.alertRenderError = false;
        return;
      },2000);
    } else {
      console.log(this.url + this.email + "&senha=" + this.password + "&nome_completo="+this.nome);
      this.http.get(this.url + this.email + "&senha=" + this.password + "&nome_completo="+this.nome)
      .subscribe(data => this.callBack(data)

      );
    }
  }

  onDestroyRegisterComponent() {
    this.emitter.emit({renderLogin : true});
  }

  constructor(private http: Http) { }

  ngOnInit() {
  }

}
