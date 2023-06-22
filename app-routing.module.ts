import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ModoScrollComponent} from "./modo-scroll/modo-scroll.component";
import {ModoPaginationBtnComponent} from "./modo-pagination-btn/modo-pagination-btn.component";
import {AppComponent} from "./app.component";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  {path: "", component: HomeComponent,
  children:[
    {path: "modo-scroll", component: ModoScrollComponent},
    {path: "modo-btn", component: ModoPaginationBtnComponent}
  ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
