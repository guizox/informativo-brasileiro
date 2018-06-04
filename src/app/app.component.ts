import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loginComponentRender = true;
  forgotPasswordComponentRender = false;
  registerComponentRender = false;
  homeComponentRender = false;
  
  ngOnInit(){
    this.loginComponentRender = localStorage.getItem("user") === null;
    this.homeComponentRender = !this.loginComponentRender;
  }

  setState(value) {
    this.forgotPasswordComponentRender = value.forgotPassword;
    this.registerComponentRender = value.register;
    this.loginComponentRender = false;
    this.homeComponentRender = value.home;
  }

  onDestroyRegisterComponent(value) {
    this.loginComponentRender = value.renderLogin;
    this.forgotPasswordComponentRender = false;
    this.registerComponentRender = false;
    this.homeComponentRender = false;
  }

  onDestroyForgetPasswordComponent(value) {
    this.loginComponentRender = value.renderLogin;
    this.forgotPasswordComponentRender = false;
    this.registerComponentRender = false;
    this.homeComponentRender = false;
  }
}
