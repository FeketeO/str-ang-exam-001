import { Component, Input, OnInit } from '@angular/core';
// import { NavService, InavItem } from 'src/app/service/nav.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  title = 'Heroes';


  constructor(

  ) { }

  ngOnInit(): void {
  }

}
