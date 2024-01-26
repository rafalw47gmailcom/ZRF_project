//import { Component } from '@angular/core';

//@Component({
 // selector: 'app-home',
 // templateUrl: './home.component.html',
  //styleUrl: './home.component.css'
//})
//export class HomeComponent {
//data: any;

//}


import { Component, OnInit } from '@angular/core';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data: any[] = [];

  constructor(private apiService: ClientService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.apiService.getData().subscribe(
      (result) => {
        this.data = result;
      },
      (error) => {
        console.error('Error loading data:', error);
      }
    );
  }
}