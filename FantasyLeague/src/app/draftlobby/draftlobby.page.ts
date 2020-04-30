import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LeagueService } from '../league.service';
import { RosterService } from '../roster.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-draftlobby',
  templateUrl: './draftlobby.page.html',
  styleUrls: ['./draftlobby.page.scss'],
})
export class DraftlobbyPage implements OnInit {

  new_draft_form: FormGroup;


  constructor(
    private router: Router,
    public formBuilder: FormBuilder,
    public leagueService: LeagueService,
    public rosterService: RosterService
  ) { }

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
