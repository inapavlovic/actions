import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { catchError, tap } from 'rxjs/operators';
import { throwError, BehaviorSubject } from 'rxjs';

import { User } from './user';

export interface AuthResponse {
	kind: string;
	idToken: string;
	email: string;
	refreshToken: string;
	expiresIn: string;
	localId: string;
	registered?: boolean;
}

const API_KEY = 'API_KEY';
const URL = 'https://identitytoolkit.googleapis.com/v1/accounts';

@Injectable({ providedIn: 'root' })
export class AuthService {
	user$ = new BehaviorSubject<User>(null);
	private tokenExpirationTimer: any; 

  constructor(private http: HttpClient, private router: Router) { }

  private handleError(httpErrorResponse: HttpErrorResponse) {
  	let errorMessage;
		if (!httpErrorResponse.error || !httpErrorResponse.error.error) { 
			return throwError(errorMessage); 
		}
		switch (httpErrorResponse.error.error.message) {
			case 'EMAIL_EXISTS':
				errorMessage = 'This email already exists.';
				break;

			case 'EMAIL_NOT_FOUND':
				errorMessage = 'This email does not exists.';
				break;			

			case 'INVALID_PASSWORD':
				errorMessage = 'This password is not correct.';
				break;
			
			default:
				errorMessage = 'An unknown error';
				break;
		}
		return throwError(errorMessage);
  }

  private handleAuthentication(email: string, userId: string, token: string, expiresIn: number) {
  	const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
		const user = new User(email, userId, token, expirationDate);
		this.user$.next(user);
		this.tokenExpire(expiresIn * 1000);
		localStorage.setItem('userData', JSON.stringify(user));
  }

  signUp(email: string, password: string) {
  	return this.http.post<AuthResponse>(`${URL}:signUp?key=${API_KEY}`, {
  		email: email,
  		password: password,
  		returnSecureToken: true
  	}).pipe(catchError(this.handleError), tap( response => {
  		this.handleAuthentication(response.email, response.localId, response.idToken, Number(response.expiresIn));
  	}));
  }

  reload() {
  	const userData: {
  		email: string;
  		id: string;
  		_token: string;
  		_tokenExpirationDate: string;
  	} = JSON.parse(localStorage.getItem('userData'));
  	if (!userData) { return; }

  	const loadedUser = new User(userData.email, userData.id, userData._token, new Date(userData._tokenExpirationDate));

  	if (loadedUser.token) {
  		this.user$.next(loadedUser);
  		// future time in miliseconds - current date in miliseconds
  		const duration = new Date(userData._tokenExpirationDate).getTime() - new Date().getTime()
  		this.tokenExpire(duration);
  	}
  }

  login(email: string, password: string) {
  	return this.http.post<AuthResponse>(`${URL}:signInWithPassword?key=${API_KEY}`, {
  		email: email,
  		password: password,
  		returnSecureToken: true
  	}).pipe(catchError(this.handleError),tap( response => {
  		this.handleAuthentication(response.email, response.localId, response.idToken, Number(response.expiresIn))
  	}));
  }

  logout() {
  	this.user$.next(null);
  	this.router.navigate(['/auth']);
  	localStorage.removeItem('userData');
  	if (this.tokenExpirationTimer) {
  		clearTimeout(this.tokenExpirationTimer);
  	}
  	this.tokenExpirationTimer = null;
  }

  tokenExpire(duration: number) {
  	this.tokenExpirationTimer = setTimeout( () => this.logout(), duration);
  }

}
