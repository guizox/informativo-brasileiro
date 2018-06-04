import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-password',
  templateUrl: './user-password.component.html',
  styleUrls: ['./user-password.component.css']
})
export class UserPasswordComponent implements OnInit {

  @Input() password : string = '';

  constructor() { }

  ngOnInit() {
  }

}
