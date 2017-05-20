import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  localizacao: any = new Object();

  title = 'app works!';

  nomeCompleto:string = 'Werlon Guilherme';

  mostraAlerta(nome:string):void{
    alert(nome);
  }

  exibirLocalizacao(localizacao): void{
    alert(localizacao);
    console.log(localizacao);

    this.localizacao = localizacao;
  }
}
