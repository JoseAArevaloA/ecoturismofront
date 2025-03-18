import { Injectable } from '@angular/core';
import { CognitoUserPool, CognitoUserAttribute, ISignUpResult, CognitoUser, ICognitoUserData } from 'amazon-cognito-identity-js';
import { poolData } from '../config/angular-auth-oidc.adapter';
import { fetchAuthSession, getCurrentUser, signIn, SignInInput, signOut } from '@aws-amplify/auth';
import { empty } from 'rxjs';


const userPool = new CognitoUserPool(poolData);

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {}

  async signIn(username: string, password: string) {
    try {
      console.log('Inicio de sesión con datos', username);
      const  input: SignInInput = {
        username: username,
        password: password
      }
      const user = await signIn(input);
      return user;
    } catch (error) {
      console.error('Error en inicio de sesión', error);
      throw error;
    }
  }

  async confirmSignUp(username: string, code: string): Promise<any> {
    const userData: ICognitoUserData = {
      Username: username,
      Pool: userPool,
    };

    const cognitoUser = new CognitoUser(userData);

    return new Promise((resolve, reject) => {
      cognitoUser.confirmRegistration(code, true, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  }

  async registerUser(
    email: string,
    firstName: string,
    lastName: string,
    phone: string,
    NumDocument: string,
    password: string,
    typeDocument: string,
  ): Promise<ISignUpResult> {
    return new Promise((resolve, reject) => {
      const number = `+57${phone}`;

      const attributes = [
        new CognitoUserAttribute({ Name: 'email', Value: email }),
        new CognitoUserAttribute({ Name: 'name', Value: firstName }),
        new CognitoUserAttribute({ Name: 'family_name', Value: lastName }),
        new CognitoUserAttribute({ Name: 'phone_number', Value: number }),
        new CognitoUserAttribute({ Name: 'custom:document_number', Value: NumDocument }),
        new CognitoUserAttribute({ Name: 'custom:type_document', Value: typeDocument }),
      ];

      userPool.signUp(email, password, attributes, [], (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result as ISignUpResult);
        }
      });
    });
  }

  async signOut() {
    try {
      await signOut();
      console.log('Sesión cerrada');
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  }

  async getUser() {
    try {
      const session = await fetchAuthSession();
      console.log('Sesión obtenida', session);

      const user = await getCurrentUser();
      console.log('Usuario obtenido', user.userId);

      return user;
    } catch (error) {
      console.error('Error al obtener sesión:', error);
      return undefined;
    }
  }

  async getUserAttributes() {
    try {
      const user = await fetchAuthSession();
      const userData = user.tokens?.idToken?.payload;
      if (userData) {
        return {
          id: userData.sub,
          name: userData['name'],
          email: userData['email'],
          phone: userData['phone_number'],
          custom: userData['custom:document_number'],
          typeDocument: userData['custom:type_document'],
        }
      }
      return null;
    } catch (error) {
      console.error('Error obteniendo atributos:', error);
      return null;
    }
  }



}
