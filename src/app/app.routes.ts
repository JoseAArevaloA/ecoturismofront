import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HostingDetailComponent } from './pages/hosting-detail/hosting-detail.component';
import { HostinglistComponent } from './pages/hostinglist/hostinglist.component';
import { LogginComponent } from './pages/loggin/loggin.component';
import { RegisterComponent } from './pages/register/register.component';
import { ConfirmRegistrationComponent } from './pages/confirm-registration/confirm-registration.component';

export const routes: Routes = [
    {path: '', component:HomeComponent},
    {path: 'hostinglist', component:HostinglistComponent},
    {path: 'hosting-detail/:id', component:HostingDetailComponent},
    {path: 'loggin', component:LogginComponent},
    {path: 'register', component:RegisterComponent},
    {path: 'confirm-registration', component:ConfirmRegistrationComponent}, 
];
