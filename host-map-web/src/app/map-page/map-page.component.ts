import { Component, OnInit } from '@angular/core';
import {Localizacao} from "../model/localizacao.model";

@Component({
  selector: 'fd-map-page',
  templateUrl: './map-page.component.html',
  styleUrls: ['./map-page.component.css']
})
export class MapPageComponent implements OnInit {

  localizacao: Localizacao = new Localizacao();

  title = 'app works!';

  nomeCompleto:string = 'Werlon Guilherme';

  mostraAlerta(nome:string):void{
    alert(nome);
  }

  exibirLocalizacao(localizacao:Localizacao): void{
    alert(localizacao);
    console.log(localizacao);

    this.localizacao = localizacao;
  }

  constructor(){}

  ngOnInit() {
  }

}
