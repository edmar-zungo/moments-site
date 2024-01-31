import { Component, OnInit } from '@angular/core';
import { DogsShopServiceService } from '../dogs-shop-service.service';
import { DogEntity } from '../dog-entity';
import { Router } from '@angular/router';

@Component({
  selector: 'app-galery',
  standalone: true,
  imports: [],
  providers: [DogsShopServiceService, Router],
  templateUrl: './galery.component.html',
  styleUrl: './galery.component.css'
})
export class GaleryComponent implements OnInit{


  listDogs?: DogEntity[];

  constructor(private dogsService: DogsShopServiceService, private router: Router){}

  ngOnInit(): void {
    
    this.dogsService.getAllDogsNoLimit().subscribe(resp => {console.log(resp); this.listDogs = resp})
  }

  goToDetalhe(id: string) {
    this.router.navigate([`/detalhe/${id}`]);
    }

}
