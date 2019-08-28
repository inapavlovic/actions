import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { DataService } from '../data.service';
import { AuthService } from '../authentication/auth.service';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styles: []
})
export class NavigationComponent implements OnInit, OnDestroy  {
  private userSubscription: Subscription;
  isAuthenticated = false;

  constructor(private dataService: DataService, private authService: AuthService) { }

  ngOnInit() {
    this.userSubscription = this.authService.user$.subscribe( user => {
      this.isAuthenticated = !!user;
    });
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }

  saveData() {
  	this.dataService.storeActivities();
  }

  fetchData() {
  	this.dataService.fetchActivities().subscribe();
  }

  logout() {
    this.authService.logout();
  }

}
