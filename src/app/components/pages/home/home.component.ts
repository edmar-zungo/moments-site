import { Component, OnInit } from '@angular/core';
import { DogsShopServiceService } from '../dogs-shop-service.service';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { DogEntity } from '../dog-entity';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterLink, NgOptimizedImage],
  providers: [DogsShopServiceService, Router],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit{

  listDogs?: DogEntity[];
  url?: string;

  constructor(private dogsService: DogsShopServiceService, private router: Router) {}
  
  ngOnInit(): void {
    this.dogsService.getAllDogs().subscribe(resp => {console.log(resp); this.listDogs = resp})
  }

  goToGalery() {
    this.router.navigate(["/galery"]);
    }


}
