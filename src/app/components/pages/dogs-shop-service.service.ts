import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { DogEntity } from './dog-entity';


@Injectable({
  providedIn: 'root'
})
export class DogsShopServiceService {
  
  apiUrl = environment.apiUrl;
  header = {'x-api-key': 'live_aMPRamkHnkbKDwuvnjrXWhH4lF7ZRR834TbERdrYFGgl4erIp5YEhbx60bPjE0zw'};
  pages = Math.floor(Math.random() * (20 - 1 + 1)) + 1;

  constructor(private http: HttpClient) { }

 getAllDogs(): Observable<DogEntity[]>{

    return this.http.get<DogEntity[]>(`${this.apiUrl}?limit=6&page=${this.pages}`, {headers: this.header});

  }


 getAllDogsNoLimit(): Observable<DogEntity[]>{

  return this.http.get<DogEntity[]>(`${this.apiUrl}`, {headers: this.header});

}
}
