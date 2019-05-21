import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import {Routes,RouterModule} from '@angular/router';
import { HomeModule } from './modules/home/home.module';
import { AdminModule } from './modules/admin/admin.module';

const appRoutes:Routes = [
  {path:'home',loadChildren: () => HomeModule},
  {path:'',loadChildren: () => HomeModule},
  {path:'admin',loadChildren: ()=> AdminModule}
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, 
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
