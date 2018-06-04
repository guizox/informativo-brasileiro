import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  email:string = localStorage.getItem("user");
  password: string;
  confirmPassword: string;
  alertRender: boolean = false;
  alertRenderError: boolean = false;
  url="http://yfipassword.000webhostapp.com/server/YFiPassword/php/UserService.php?metodo=update&email="

  callBack(data){
    if (data.status === 200){
      localStorage.removeItem("user");
      this.alertRender = true;
      setTimeout(()=>{
        document.location.reload();
      }, 1500)
    }
  }

  changePassword(){
    if (this.password !== "" && this.password && this.password == this.confirmPassword){
      console.log(this.url + this.email + "&senha=" + this.password);
      this.http.get(this.url + this.email + "&senha=" + this.password).subscribe(data => this.callBack(data));
    } else {
      this.alertRenderError = true;
      setTimeout(()=>{
        this.alertRenderError = false;
      },1500);
    }
  }
  constructor(private http : Http) { }

  ngOnInit() {
  }

}
