import { Component, OnInit } from '@angular/core';
import {Localizacao} from "../model/localizacao.model";
import {HttpClientService} from "../http-client.service";

@Component({
  selector: 'fd-historico-page',
  templateUrl: './historico-page.component.html',
  styleUrls: ['./historico-page.component.css']
})
export class HistoricoPageComponent implements OnInit {


  historico: Localizacao[];
  /*historico: Array<Localizacao> =
    [
      new Localizacao(-16.701,-49.2668,'Google','google.com','United State','2017-01-01 22:10:10','Google'),
      new Localizacao(-16.701,-49.2668,'Google','google.com','United State','2017-01-01 22:10:10','Google'),
      new Localizacao(-16.701,-49.2668,'Google','google.com','United State','2017-01-01 22:10:10','Google'),
      new Localizacao(-16.701,-49.2668,'Google','google.com','United State','2017-01-01 22:10:10','Google'),
      new Localizacao(-16.701,-49.2668,'Google','google.com','United State','2017-01-01 22:10:10','Google')
    ]*/

  constructor(private httpClient: HttpClientService) {

  }

  ngOnInit() {
    this.httpClient.get('http://localhost:3000/api').subscribe((docs)=>{this.historico = docs});
  }

}
