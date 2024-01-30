import { Component, OnInit } from '@angular/core';
import { DogsShopServiceService } from '../dogs-shop-service.service';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DogEntity } from '../dog-entity';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  providers: [DogsShopServiceService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit{
  listDogs?: DogEntity[];
  url?: string;

  constructor(private dogsService: DogsShopServiceService) {}
  
  ngOnInit(): void {
    this.dogsService.getAllDogs().subscribe(resp => {console.log(resp); this.listDogs = resp})
  }


}
