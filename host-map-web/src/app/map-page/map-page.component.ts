import { Component, OnInit } from '@angular/core';
import {Localizacao} from "../model/localizacao.model";
import {HttpClientService} from "../http-client.service";

@Component({
  selector: 'fd-map-page',
  templateUrl: './map-page.component.html',
  styleUrls: ['./map-page.component.css']
})
export class MapPageComponent implements OnInit {

  localizacao: Localizacao = new Localizacao();

  title = 'app works!';

  nomeCompleto:string = 'Werlon Guilherme';

  constructor(private httpClient: HttpClientService){}

  mostraAlerta(nome:string):void{
    alert(nome);
  }

  exibirLocalizacao(localizacao:Localizacao): void{
    //alert(localizacao);
    //console.log(localizacao);

    this.localizacao = localizacao;

    this.httpClient
      .post('http://localhost:3000/api',localizacao)
      .subscribe((localizacao) => {
        console.log(localizacao);
      });
    //
  }



  ngOnInit() {

  }

}
