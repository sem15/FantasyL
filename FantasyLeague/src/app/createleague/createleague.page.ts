import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createleague',
  templateUrl: './createleague.page.html',
  styleUrls: ['./createleague.page.scss'],
})
export class CreateleaguePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goBack(){
    this.router.navigate(['./tabs/leagueList']);
  }

}
