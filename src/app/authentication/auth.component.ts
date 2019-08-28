import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService, AuthResponse } from './auth.service';


@Component({
  selector: 'app-authentication',
  templateUrl: './auth.component.html',
  styles: []
})
export class AuthComponent implements OnInit {
	isLogin = true;
	error: string = null;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  toggle() {
  	this.isLogin = !this.isLogin;
  }

  submit(form: NgForm) {
  	if (!form.valid) { return; }

  	const email = form.value.email;
  	const password = form.value.password;

  	let authResponse$: Observable<AuthResponse>;

  	if (this.isLogin) {
  		authResponse$ = this.authService.login(email, password);
  	} else {
	  	authResponse$ = this.authService.signUp(email, password);
  	}

  	authResponse$.subscribe( response => {
	  		this.router.navigate(['/activities']);
	  	}, errorMessage => {
	  		this.error = errorMessage;
	  	}
	  );

  	form.reset();
  }

}
