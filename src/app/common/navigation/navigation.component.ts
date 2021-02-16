import { Component, OnInit } from '@angular/core';
// import { NavService, InavItem } from 'src/app/service/nav.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  // navItems: InavItem[] = this.nav.navItems;

  constructor(
    // private nav: NavService,
  ) { }

  ngOnInit(): void {
  }

}
