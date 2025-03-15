import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Amplify } from 'aws-amplify';
import amplifyConfig from './../amplifyconfiguration.json';
@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ecoturismofront-app';

  constructor() {
    Amplify.configure({
      Auth: {
        Cognito: {
          userPoolId: "us-east-2_dFo6D5L5J",
          userPoolClientId: "15n6ondbdkq326ua51h2bqgu7u",
          signUpVerificationMethod: "code",
          loginWith: {
            email: true
          }
        }
      }
    });
  }




}
