import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-client',
  templateUrl: './admin-client.component.html',
  styleUrls: ['./admin-client.component.scss']
})
export class AdminClientComponent implements OnInit {

  tab = 1;

  constructor() { }

  ngOnInit(): void {
  }

  selectTab(tab) {
    this.tab = tab;
  }

  
}
