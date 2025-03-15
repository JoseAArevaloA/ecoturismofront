import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-forms-confirm-registration',
  standalone: true,
  imports: [
    FormsModule,
  ],
  templateUrl: './forms-confirm-registration.component.html',
  styleUrl: './forms-confirm-registration.component.css'
})
export class FormsConfirmRegistrationComponent {
  constructor(
    private authService: AuthService,
    private router:Router,
    private route: ActivatedRoute,
  ) {}
  email = '';
  verificationCode = '';
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params['email']) {
        this.email = params['email'];
      }
    });
  }

 confirmSignup() {
    this.authService.confirmSignUp(this.email, this.verificationCode)
      .then(() => {
        this.router.navigate(['/loggin']);
      })
      .catch(error => {
        console.error('Error confirmando cuenta', error);
        alert('Error: ' + error.message);
      });
  }
}
