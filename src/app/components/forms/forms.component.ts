import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forms',
  imports: [
    FormsModule,
  ],
  providers: [
    AuthService,
  ],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css'
})
export class FormsComponent {
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }
  email = '';
  firstName = '';
  lastName = '';
  phone = 0;
  NumDocument = 0;
  password = '';
  confirmPass = '';
  typeDocument = '';

  async register() {
    this.authService.registerUser(
      this.email,
      this.firstName,
      this.lastName,
      this.phone.toString(),
      this.NumDocument.toString(),
      this.password,
      this.typeDocument)
      .then(() => {
        this.router.navigate(['/confirm-registration'], {
          queryParams: {
            email: this.email,
          }
        })
      })
      .catch(error => alert('Error en el registro: ' + error.message));
  }
}
