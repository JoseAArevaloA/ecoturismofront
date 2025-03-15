import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DetailpageComponent } from './pages/detailpage/detailpage.component';
import { LogginComponent } from './pages/loggin/loggin.component';
import { RegisterComponent } from './pages/register/register.component';
import { ConfirmRegistrationComponent } from './pages/confirm-registration/confirm-registration.component';

export const routes: Routes = [
    {path: '', component:HomeComponent},
    {path: 'detailpage', component:DetailpageComponent},
    {path: 'loggin', component:LogginComponent},
    {path: 'register', component:RegisterComponent},
    {path: 'confirm-registration', component:ConfirmRegistrationComponent},
];
