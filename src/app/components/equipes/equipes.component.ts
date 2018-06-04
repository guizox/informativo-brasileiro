import { Component, OnInit } from '@angular/core';
import { GamesServiceService } from '../../services/games-service.service';

@Component({
  selector: 'app-equipes',
  templateUrl: './equipes.component.html',
  styleUrls: ['./equipes.component.css']
})
export class EquipesComponent implements OnInit {

  equipes: any;
  loading:boolean = false;
  constructor(private gameSerivce: GamesServiceService) { }

  ngOnInit() {
    this.loading = true;
    this.gameSerivce.getAllGames().then((resp) => {
      let result = resp.json();
      this.equipes = new Array();
      for (let j = 0; j < Object.keys(result["equipes"]).length; j++){
        this.equipes.push(result["equipes"][Object.keys(result["equipes"])[j]]);
      }
      this.loading = false;
    });
  }
}
