import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HostingDetailComponent } from './pages/hosting-detail/hosting-detail.component';
import { HostinglistComponent } from './pages/hostinglist/hostinglist.component';

export const routes: Routes = [
    {path: '', component:HomeComponent},
    {path: 'hostinglist', component:HostinglistComponent},
    {path: 'hosting-detail/:id', component:HostingDetailComponent},

];
