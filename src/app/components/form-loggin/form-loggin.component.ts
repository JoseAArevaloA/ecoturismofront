import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-loggin',
  imports: [
    RouterLink,
    CommonModule,
    FormsModule,
  ],
  templateUrl: './form-loggin.component.html',
  styleUrl: './form-loggin.component.css'
})
export class FormLogginComponent {

  constructor(
    private readonly service: AuthService,
    private readonly router: Router,
  ) { }
  email = '';
  password = '';

  isAuthenticated = false;
  async login() {
    try {
      console.log(this.email, this.password);
      const user = await this.service.signIn(this.email, this.password);
      this.isAuthenticated = true;
      this.router.navigate(['/']);
      console.log('Usuario logueado', user);
    } catch (error: any) {
      console.error('Error en inicio de sesión', error);
      alert('Error: ' + error.message);
    }
  }


}
