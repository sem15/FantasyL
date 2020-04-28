import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LeagueService } from '../league.service';

@Component({
  selector: 'app-createleague',
  templateUrl: './createleague.page.html',
  styleUrls: ['./createleague.page.scss'],
})
export class CreateleaguePage implements OnInit {

  new_league_form: FormGroup;

  constructor(
    private router: Router,
    public formBuilder: FormBuilder,
    public leagueService: LeagueService
  ){

  }


  ngOnInit() {
    this.new_league_form = this.formBuilder.group({
      title: new FormControl('', Validators.required),
    });
  }


  createLeague(value){
    console.log(value.title);

    this.leagueService.createLeague(value.title);

  	this.goBack();
  }

  goBack(){
    this.router.navigate(['./tabs/leagueList']);
  }

}
