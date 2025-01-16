import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-cards',
  templateUrl: './admin-cards.component.html',
  styleUrls: ['./admin-cards.component.scss']
})
export class AdminCardsComponent implements OnInit {

  @Input() loader = false;

  @Input() data: {
    name: string;
    value: number;
    icon: string;
  }[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
