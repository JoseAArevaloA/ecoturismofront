import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DetailpageComponent } from './pages/detailpage/detailpage.component';

export const routes: Routes = [
    {path: '', component:HomeComponent},
    {path: 'detailpage', component:DetailpageComponent},
];
