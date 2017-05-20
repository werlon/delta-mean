import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FdSearchBarComponent } from './fd-search-bar/fd-search-bar.component';
import {HttpClientService} from "./http-client.service";
import { HostPanelComponent } from './host-panel/host-panel.component';
import {AgmCoreModule} from "@agm/core";
import {environment} from "../environments/environment";
import { MapContainerComponent } from './map-container/map-container.component';

@NgModule({
  declarations: [
    AppComponent,
    FdSearchBarComponent,
    HostPanelComponent,
    MapContainerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: environment.googleApiKey
    })
  ],
  providers: [
    HttpClientService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
