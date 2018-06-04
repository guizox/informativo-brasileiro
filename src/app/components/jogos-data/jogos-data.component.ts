import { Component, OnInit } from '@angular/core';
import { GamesServiceService } from '../../services/games-service.service';

@Component({
  selector: 'app-jogos-data',
  templateUrl: './jogos-data.component.html',
  styleUrls: ['./jogos-data.component.css']
})
export class JogosDataComponent implements OnInit {
  jogos: any;
  roundNumber: number = 9;
  loading: boolean = false;

  constructor(private gameService: GamesServiceService) { }

  ngOnInit() {
    this.searchRound();
  }

  searchRound(){
    this.loading = true;
    this.gameService.getAllGames().then((resp) => {
      let result = resp.json();
      this.jogos = new Array();
      for (let i = 0; i < result.fases['2700'].jogos.rodada[this.roundNumber].length; i++){
        let id = result.fases['2700'].jogos.rodada[this.roundNumber][i],
          time1 = parseInt(result.fases['2700'].jogos.id[id]['time1']),
          time2 = parseInt(result.fases['2700'].jogos.id[id]['time2']);

        for (let j = 0; j < Object.keys(result["equipes"]).length; j++){
          let equipe = Object.keys(result["equipes"])[j];
          if (time1 == parseInt(result["equipes"][equipe].id)){
            time1 = result["equipes"][equipe];
          }
          if (time2 == parseInt(result["equipes"][equipe].id)){
            time2 = result["equipes"][equipe];
          }
        }

        result.fases['2700'].jogos.id[id]['time1'] = time1;
        result.fases['2700'].jogos.id[id]['time2'] = time2;
        this.jogos.push(result.fases['2700'].jogos.id[id]);
      }
      this.loading = false;
    });
  }
}
