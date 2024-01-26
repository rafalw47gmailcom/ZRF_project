// app.component.ts
import { Component, OnInit } from '@angular/core';
import { ClientService } from '../app/services/client.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  data: any[] = [];

  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.clientService.getData().subscribe(
      (result) => {
        this.data = result;
      },
      (error) => {
        console.error('Error loading data:', error);
      }
    );
  }
}