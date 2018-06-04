import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-jogo',
  templateUrl: './jogo.component.html',
  styleUrls: ['./jogo.component.css']
})
export class JogoComponent implements OnInit {

  @Input() jogo:{};

  constructor() { }

  ngOnInit() {
    
  }

}
