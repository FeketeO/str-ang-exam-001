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

   hero: Hero[] = [

      {
        "id": 1,
        "name": "Infinity",
        "superpower": "timetravel",
        "address": "Kazakhstan"
      },
      {
        "id": 2,
        "name": "SWeathera",
        "superpower": "changes the weather",
        "address": "Russia"
      },
      {
        "id": 3,
        "name": "Green Leaf",
        "superpower": "sends order to all plants",
        "address": "Peru"
      },
      {
        "id": 4,
        "name": "Aqua",
        "superpower": "sends order to all kind of water",
        "address": "New Zealand"
      },
      {
        "id": 5,
        "name": "Mistral",
        "superpower": "Orders the windr",
        "address": "Iceland"
      }

    ]



  // heroesUrl: string = "http://localhost:3000/heroes";

  // private datalist: Hero[] = [];

  // get list(): Hero[] {
  //   return this.datalist;
  // }

  // list$: BehaviorSubject<Hero[]> = new BehaviorSubject<Hero[]>([]);

  constructor() {}
    // private http: HttpClient) { }

    // getAll(): void {
    //   this.http.get<Hero[]>(this.heroesUrl).subscribe(
    //     heroes => this.list$.next(heroes)
    //   );
    getAll(): Hero[] {
      return (this.hero.filter(item => item));
    }

  }



