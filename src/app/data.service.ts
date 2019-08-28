import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, tap, take, exhaustMap } from 'rxjs/operators';

import { ActivityService } from './activities/activity.service';
import { Activity } from './activities/activity';


const URL = 'https://activity-efa6b.firebaseio.com/activities.json';

@Injectable({ providedIn: 'root' })
export class DataService {

  constructor(private http: HttpClient, private activityService: ActivityService) { }

  storeActivities() {
  	const activities = this.activityService.getActivities();
  	this.http.put(URL, activities).subscribe( response => { 
  		console.log(response); 
  	});
  }

  fetchActivities() {
  	return this.http.get<Activity[]>(URL).pipe(
  		map( activities => { return activities.map( activity => {
	  			return {...activity, actions: activity.actions ? activity.actions : [] };
	  		});  
  		}), 
  		tap( activities => { this.activityService.setActivities(activities); } )
  	);
  }

}
