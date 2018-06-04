import { Component, OnInit } from '@angular/core';
import { GamesServiceService } from '../../services/games-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [GamesServiceService]
})
export class HomeComponent implements OnInit {

  constructor() { }
  jogosData: boolean = true;
  rodadas: boolean = false;
  equipes: boolean = false;
  classificacao: boolean = false;
  profile: boolean = false;
  ngOnInit() {
  }

  logout() {
    localStorage.removeItem("user");
    document.location.reload();
  }

  onClickJogosData(){
    this.jogosData = true;
    this.rodadas = false;
    this.equipes = false;
    this.classificacao = false;
    this.profile = false;
  }

  onClickRodadas(){
    this.rodadas = true;
    this.jogosData = false;
    this.equipes = false;
    this.classificacao = false;
    this.profile = false;
  }

  onClickEquipes(){
    this.equipes = true;
    this.jogosData = false;
    this.rodadas = false;
    this.classificacao = false;
    this.profile = false;
  }

  onClickClassificacao() {
    this.classificacao = true;
    this.jogosData = false;
    this.rodadas = false;
    this.equipes = false;
    this.profile = false;
  }

  onClickProfile() {
    this.profile = true;
    this.classificacao = false;
    this.jogosData = false;
    this.rodadas = false;
    this.equipes = false;
  }
}
