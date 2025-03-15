import { Component } from '@angular/core';
import { NavbarLogginComponent } from '../../components/navbar-loggin/navbar-loggin.component';
import { FormLogginComponent } from '../../components/form-loggin/form-loggin.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-loggin',
  imports: [
    NavbarLogginComponent,
    FormLogginComponent,
    FooterComponent,
  ],
  templateUrl: './loggin.component.html',
  styleUrl: './loggin.component.css'
})
export class LogginComponent {

}
