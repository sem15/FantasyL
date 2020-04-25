import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-draftlobby',
  templateUrl: './draftlobby.page.html',
  styleUrls: ['./draftlobby.page.scss'],
})
export class DraftlobbyPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }


  goBack(){
    this.router.navigate(['./tabs/leagueOverview']);
  }

  playerInfoTest(){
    this.router.navigate(['./tabs/playerInfo']);
  }

}
