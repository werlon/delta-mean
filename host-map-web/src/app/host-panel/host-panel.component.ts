import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'fd-host-panel',
  templateUrl: './host-panel.component.html',
  styleUrls: ['./host-panel.component.css']
})
export class HostPanelComponent implements OnInit {

  @Input()
  localizacao: any = new Object();

  constructor() { }

  ngOnInit() {
  }

}
