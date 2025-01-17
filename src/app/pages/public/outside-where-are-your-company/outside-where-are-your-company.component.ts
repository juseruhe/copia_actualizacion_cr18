import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-outside-where-are-your-company',
  templateUrl: './outside-where-are-your-company.component.html',
  styleUrls: ['./outside-where-are-your-company.component.scss'],
  imports: [RouterOutlet],
  standalone: true
})
export class OutsideWhereAreYourCompanyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
