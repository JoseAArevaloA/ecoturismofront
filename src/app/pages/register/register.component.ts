import { Component } from '@angular/core';
import { NavbarLogginComponent } from '../../components/navbar-loggin/navbar-loggin.component';
import { FormsComponent } from '../../components/forms/forms.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-register',
  imports: [
    NavbarLogginComponent,
    FormsComponent,
    FooterComponent,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

}
