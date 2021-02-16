import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Hero } from '../model/hero';


export interface ITableHeroes {
  key: string;
  text: string;
}

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  heroesUrl: string = "http://localhost:3000/heroes";

  // private datalist: Hero[] = [];

  // get list(): Hero[] {
  //   return this.datalist;
  // }

  list$: BehaviorSubject<Hero[]> = new BehaviorSubject<Hero[]>([]);

  constructor(
    private http: HttpClient) { }

    getAll(): void {
      this.http.get<Hero[]>(this.heroesUrl).subscribe(
        heroes => this.list$.next(heroes)
      );
    }
}
