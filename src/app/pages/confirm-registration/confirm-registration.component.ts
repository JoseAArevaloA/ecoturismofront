import { Component } from '@angular/core';
import { NavbarLogginComponent } from '../../components/navbar-loggin/navbar-loggin.component';
import { FormsConfirmRegistrationComponent } from '../../components/forms-confirm-registration/forms-confirm-registration.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-confirm-registration',
  imports: [
    NavbarLogginComponent,
    FooterComponent,
    FormsConfirmRegistrationComponent,
  ],
  templateUrl: './confirm-registration.component.html',
  styleUrl: './confirm-registration.component.css'
})
export class ConfirmRegistrationComponent {

}
