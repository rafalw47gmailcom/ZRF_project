
// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NewOffer1Component } from './new-offer1/new-offer1.component';
import { HomeComponent } from './home/home.component'


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'new-offer1', component: NewOffer1Component },
  { path: 'home', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }