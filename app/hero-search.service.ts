import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs';
import { Hero }           from './hero';

@Injectable()
export class HeroSearchService {
  constructor(private http: Http) {}
  search(term: string): Observable<Hero[]> {
    return this.http
               .get(`http://192.168.30.96:3003/heroes/?q=${term}`)
               .map((r: Response) => r.json() as Hero[]);
  }
}

