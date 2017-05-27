import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {HttpClientService} from "../http-client.service";
import {Localizacao} from "../model/localizacao.model";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'fd-search-bar',
  templateUrl: './fd-search-bar.component.html',
  styleUrls: ['./fd-search-bar.component.css']
})
export class FdSearchBarComponent implements OnInit {

  dominio: String;

  @Output()
  localizacao: EventEmitter<Localizacao> = new EventEmitter();

  constructor(private httpClient: HttpClientService, private _route:ActivatedRoute ) {

    this._route.params.subscribe((params)=>{
      let ip = params['dominio'];
      if(ip){
        this.dominio = ip;
      }

    });
  }

  ngOnInit() {
    if(this.dominio){
      this.pesquisar();
    }

  }

  pesquisar(): void{
    this.httpClient
      .get('http://ip-api.com/json/' + this.dominio)
      .subscribe(
        (data) => {
          //console.log(data);
          //alert(data);

          data.dominio = this.dominio;

          this.localizacao.emit(data);
          //console.log(data)
        },
        (error) => console.error(error)
      );
    //alert(this.dominio);
  }
}
