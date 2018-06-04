import { Component, OnInit } from '@angular/core';
import { GamesServiceService } from '../../services/games-service.service';

@Component({
  selector: 'app-classificacao',
  templateUrl: './classificacao.component.html',
  styleUrls: ['./classificacao.component.css']
})
export class ClassificacaoComponent implements OnInit {

  constructor(private gameService: GamesServiceService) { }
  classficacao: {}[];
  times: {}[];
  loading: boolean = true;

  ngOnInit() {
    this.gameService.getAllGames().then(resp => {
      let result = resp.json();
      this.times = new Array();
      this.classficacao = new Array();
      for (let i = 0; i < result.fases["2700"]["classificacao"]["grupo"].Único.length; i++){
        this.classficacao.push({"time" : result.fases["2700"]["classificacao"]["grupo"].Único[i]});
      }
      let equipes = Object.keys(result.fases["2700"]["classificacao"]["equipe"]);
      for (let i = 0; i < this.classficacao.length; i++){
        for (let j = 0; j < equipes.length; j++){
          if (this.classficacao[i]["time"].trim() === equipes[j].trim()){
            for (let k = 0; k < Object.keys(result.equipes).length; k++){
              if (result.equipes[Object.keys(result.equipes)[k]].id === result.fases["2700"]["classificacao"]["equipe"][equipes[j]].id){
                this.times.push({
                  "time" : this.classficacao[i]["time"],
                  "info" : result.fases["2700"]["classificacao"]["equipe"][equipes[j]],
                  "brasao" : result.equipes[Object.keys(result.equipes)[k]].brasao,
                  "nome" : result.equipes[Object.keys(result.equipes)[k]]["nome-comum"]
                });
              }
            }
          }
        }
      }
      this.loading = false;
    });
  }

}
