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

  constructor(private http: HttpClient) { }

 getAllDogs(): Observable<DogEntity[]>{

    return this.http.get<DogEntity[]>(`${this.apiUrl}?limit=6`, {headers: this.header});

  }
}
