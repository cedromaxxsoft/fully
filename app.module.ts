import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {InfiniteScrollModule} from "ngx-infinite-scroll";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatListModule} from "@angular/material/list";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatCardModule} from "@angular/material/card";
import {ModoScrollComponent} from './modo-scroll/modo-scroll.component';
import {ModoPaginationBtnComponent} from './modo-pagination-btn/modo-pagination-btn.component';
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import { HomeComponent } from './home/home.component';
import {HttpClientModule} from "@angular/common/http";
import {MatPaginatorModule} from "@angular/material/paginator";

@NgModule({
  declarations: [
    AppComponent,
    ModoScrollComponent,
    ModoPaginationBtnComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InfiniteScrollModule,
    BrowserAnimationsModule,
    MatListModule,
    HttpClientModule,
    RouterModule,
    CommonModule,
    MatToolbarModule,
    MatCardModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
