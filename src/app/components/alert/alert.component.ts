import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  @Input() alertType;
  @Input() conteudo;
  @Input() header;
  render: boolean = false;
  constructor() { }

  ngOnInit() {
  }

}
