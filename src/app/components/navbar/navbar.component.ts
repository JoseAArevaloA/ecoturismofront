import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isLoggedIn: boolean = false;

  constructor(
    private readonly service: AuthService,
    private readonly router: Router
  ) {}

  ngOnInit() {
    this.checkUserSession();
    console.log("data:",this.service.getUserAttributes())
  }

  async checkUserSession() {
    try {
      const user = await this.service.getUser();
      const loginElement = document.getElementById('log-in');
      const loginMobileElement = document.getElementById('log-in-mobile');
      const logoutElement = document.getElementById('log-out');
      const logoutMobileElement = document.getElementById('log-out-mobile');
      if (user?.userId === undefined) {
        this.isLoggedIn = false;
      }
      else {
        this.isLoggedIn = true;
      }

      if (!this.isLoggedIn) {
        console.log(logoutElement, this.isLoggedIn);
        if (logoutElement) {
          logoutElement.classList.add('hidden');
        }
        if (logoutMobileElement) {
          logoutMobileElement.classList.add('hidden');
        }

        if (loginMobileElement) {
          loginMobileElement.classList.remove('hidden');

        }
        if (loginElement) {
          loginElement.classList.remove('hidden');
      }
      console.log('Usuario autenticado:', this.isLoggedIn);
    }
    else {
      if (logoutElement) {
        logoutElement.classList.remove('hidden');
      }
      if (logoutMobileElement) {
        logoutMobileElement.classList.remove('hidden');
      }

      if (loginMobileElement) {
        loginMobileElement.classList.add('hidden');

      }
      if (loginElement) {
        loginElement.classList.add('hidden');
      }
    }

    } catch (error) {
      console.error('Error al obtener el usuario:', error);
      this.isLoggedIn = false;
    }
  }

  async signOut() {
    await this.service.signOut();
    this.isLoggedIn = false;
    window.location.reload();
  }

}
