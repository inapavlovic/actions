import { Component, OnInit } from '@angular/core';

import { AuthService } from './authentication/auth.service';


@Component({
  selector: 'app-root',
  template: `
    <app-navigation></app-navigation>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent implements OnInit {

	constructor(private authService: AuthService) { }

	ngOnInit() {
		this.authService.reload();
	}

}
