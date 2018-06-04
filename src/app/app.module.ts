import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { FooterComponent } from './components/footer/footer';
import { RegisterComponent } from './components/register/register.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { UserPasswordComponent } from './components/user-password/user-password.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { JogosDataComponent } from './components/jogos-data/jogos-data.component';
import { JogoComponent } from './components/jogo/jogo.component';
import { TimeComponent } from './components/time/time.component';
import { EquipesComponent } from './components/equipes/equipes.component';
import { ClassificacaoComponent } from './components/classificacao/classificacao.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { LoadingComponent } from './components/loading/loading.component';
import { AlertComponent } from './components/alert/alert.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FooterComponent,
    RegisterComponent,
    ForgetPasswordComponent,
    UserPasswordComponent,
    HomeComponent,
    HeaderComponent,
    JogosDataComponent,
    JogoComponent,
    TimeComponent,
    EquipesComponent,
    ClassificacaoComponent,
    ChangePasswordComponent,
    LoadingComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
