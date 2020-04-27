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
          status: new FormControl("",Validators.required),
        });
        console.log("constructor of UpdateItemPage")
  }
  ngOnInit() {
    console.log("onInit")
    this.route.params.subscribe(
    param => {
      this.current_player = param;
      console.log(this.current_player);

      this.edit_item_form.patchValue({status:this.current_player.status});;

  })
}

updateStatus(value){

  let newValues = {
    id:this.rosterService.id,
    status: value.status,
    pid:this.current_player.pid
  }
  //if(firebase.auth().currentUser.uid===this.current_player.uid)
  //{
    this.rosterService.updateStatus(newValues);
  //}
  // else{
  //   console.log("UID "+firebase.auth().currentUser.uid+ 
  //   "doesn't match, "+this.current_player.uid+"item not updated")
  // }


  this.goBack();
}

goBack(){
  this.router.navigate(['/tabs/roster-overview']);
}

}
