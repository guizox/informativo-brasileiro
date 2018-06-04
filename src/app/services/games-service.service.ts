import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { PromiseState } from 'q';

@Injectable()
export class GamesServiceService {

  url: string = "http://yfipassword.000webhostapp.com/server/YFiPassword/php/getJsonUol1.php";

  getAllGames() {
    return this.http.get(this.url).toPromise();
  }

  constructor(private http: Http) {
  }

}
