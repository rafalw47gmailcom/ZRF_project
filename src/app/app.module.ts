import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { NewOffer1Component } from './new-offer1/new-offer1.component';
import { HomeComponent } from './home/home.component';


import { ReactiveFormsModule } from '@angular/forms'; // Dodaj ReactiveFormsModule

import { ApiServiceService } from './api-service.service';

import { FormsModule } from '@angular/forms';






@NgModule({
  declarations: [
    AppComponent,
    NewOffer1Component,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule, 
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ApiServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }



