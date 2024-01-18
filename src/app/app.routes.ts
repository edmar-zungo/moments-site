import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { GaleryComponent } from './components/pages/galery/galery.component';
import { AboutComponent } from './components/pages/about/about.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'galery', component: GaleryComponent},
    {path: 'about', component: AboutComponent},
    {path: '**',component: HomeComponent}
];
