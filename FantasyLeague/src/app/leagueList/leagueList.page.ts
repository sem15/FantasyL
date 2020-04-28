import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';


@Component({
  selector: 'app-leagueList',
  templateUrl: 'leagueList.page.html',
  styleUrls: ['leagueList.page.scss']
})
export class leagueListPage {

  constructor(private router: Router) {}


  createLeague(){
  	this.router.navigate(['./tabs/createLeague']);
  }

  logout(){
    firebase.auth().signOut();   
    this.router.navigate(['./tabs/login']);
  }

}
