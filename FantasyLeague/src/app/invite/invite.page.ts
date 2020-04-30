import { Component, OnInit } from '@angular/core';

import { Validators, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import {RosterService} from '../roster.service'
import {LeagueService} from '../league.service'
import * as firebase from 'firebase';

@Component({
  selector: 'app-invite',
  templateUrl: './invite.page.html',
  styleUrls: ['./invite.page.scss'],
})
export class InvitePage implements OnInit {
  new_item_form: FormGroup;
  constructor(
    private router:Router,
    public formBuilder: FormBuilder,
    public rosterService: RosterService,
    public leagueService: LeagueService
  ) { }

  ngOnInit() {
    this.new_item_form = this.formBuilder.group({
      Team: new FormControl('', Validators.required),
      invCode: new FormControl('', Validators.required)
    });
  }

  join(value){
    let newValues={
      Team:value.Team,
      invCode:value.invCode
    }
    this.rosterService.addRoster(newValues);

    setTimeout(() => {
      this.leagueService.joinLeague(newValues)
    }, 1000);
  	this.goBack();
  }

  goBack(){
    this.router.navigate(['/tabs/leagueList']);
}

}
