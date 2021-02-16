import { Component, Input, OnInit } from '@angular/core';
import { Hero } from 'src/app/model/hero';
import { BehaviorSubject } from 'rxjs';
import { HeroService } from 'src/app/service/hero.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})

// inputs: ['hero'],

export class HeroesComponent implements OnInit{

  heroesList$: BehaviorSubject<Hero[]> = this.hService.list$;


  constructor(
    private hService: HeroService)
    {}


  ngOnInit(): void {
    this.hService.getAll();
  }
}

