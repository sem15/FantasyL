import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';

import { RosterService } from '../roster.service';
import * as firebase from 'firebase';
@Component({
  selector: 'app-editroster',
  templateUrl: './editroster.page.html',
  styleUrls: ['./editroster.page.scss'],
})
export class EditrosterPage implements OnInit {
  current_player:any;
  edit_item_form:FormGroup;
  constructor(
    public formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private rosterService: RosterService,
    private router:Router
  	) { 
  		this.edit_item_form = this.formBuilder.group({
          Team: new FormControl("", Validators.required),
          Status: new FormControl("",Validators.required),
        });
        console.log("constructor of UpdateItemPage")
  }
  ngOnInit() {
    console.log("onInit")
    this.route.params.subscribe(
    param => {
      this.current_player = param;
      console.log(this.current_player);
      this.edit_item_form.patchValue({Team:this.rosterService.param.Team});
      console.log(this.rosterService.param);
      this.edit_item_form.patchValue({Status:this.current_player.Status});

  })
}

updateStatus(value){
let playerlist=this.rosterService.players;
console.log(playerlist);
let index=playerlist.map(function(e){
  return e.pid;
}).indexOf(this.current_player.pid);
console.log("index:"+index);
if(index!=-1)
{
  console.log(playerlist);
  console.log(playerlist.Status);
  playerlist[index].Status=value.Status;
}
  let newValues = {
    id:this.rosterService.id,
    Team:value.Team,
    players:playerlist
  }
  console.log("PlayerList:"+playerlist);
  if(firebase.auth().currentUser.uid===this.rosterService.param.uid)
  {
    this.rosterService.updateStatus(newValues);
  }
  else{
    console.log("UID "+firebase.auth().currentUser.uid+ 
    "doesn't match, "+this.rosterService.param.uid+"item not updated")
  }


  this.goBack();
}

goBack(){
  this.router.navigate(['/tabs/leagueOverview']);
}

}
