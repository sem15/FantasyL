import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LeagueService } from '../league.service';
import { RosterService } from '../roster.service';
import {PlayerService} from'../player.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-draftlobby',
  templateUrl: './draftlobby.page.html',
  styleUrls: ['./draftlobby.page.scss'],
})
export class DraftlobbyPage implements OnInit {

  new_draft_form: FormGroup;
  topList:Array<any>=[];
  midList:Array<any>=[];
  jngList:Array<any>=[];
  adcList:Array<any>=[];
  supList:Array<any>=[];
  playersList:Array<any>=[];


  constructor(
    private router: Router,
    public formBuilder: FormBuilder,
    public leagueService: LeagueService,
    public rosterService: RosterService,
    private playerService:PlayerService
  ) {
    this.playerService.getPlayers();
    this.playersList = this.playerService.getPlayers();
    console.log("got " + this.playersList.length + " players loaded.");
    for (let i = 0; i < this.playersList.length; i++) {
      if(this.playersList[i].Position == "Top") {
        console.log(this.playersList[i].IGN + this.playersList[i].Position);
      }
    }
  }

  ngOnInit() {
    this.new_draft_form = this.formBuilder.group({
      ign1: new FormControl('', Validators.required),
      //ign2: new FormControl('', Validators.required),
      //ign3: new FormControl('', Validators.required),
      //ign4: new FormControl('', Validators.required),
      //ign5: new FormControl('', Validators.required)
    });
  }

draftForm(value) {

}


  goBack(){
    this.router.navigate(['./tabs/leagueOverview']);
  }

  playerInfoTest(){
    this.router.navigate(['./tabs/playerInfo']);
  }

}
