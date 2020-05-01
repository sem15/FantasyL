import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import {RosterService} from '../roster.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-roster-overview',
  templateUrl: './roster-overview.page.html',
  styleUrls: ['./roster-overview.page.scss'],
})
export class RosterOverviewPage implements OnInit {

  currentroster:any;
  db=firebase.firestore();
  playerlist:any;

  constructor(
    private router: Router,
    private rosterService: RosterService,
    private playerService: PlayerService,
    private route: ActivatedRoute
  ) {
    var self=this;
    this.currentroster=this.rosterService.param;
    this.playerlist=this.rosterService.playerlist;
    console.log("constructor");
    console.log(this.currentroster);
    console.log(this.playerlist);
    // this.db.collection("roster").where("id","==",this.currentroster.rosterid)
    // .onSnapshot(function(querySnapshot){
    //   self.playerlist=[];
    //   querySnapshot.forEach(function(doc){
    //     var list=doc.data();
    //     self.playerlist.push({players:list.players});
    //     console.log(self.playerlist);
    //   });
    // });
  }

  ngOnInit() {
    this.currentroster=this.rosterService.param;
    this.playerlist=this.rosterService.playerlist;
    console.log("ngonit");
    console.log(this.playerlist);
    console.log(this.rosterService.param);
    console.log(this.currentroster);
  }
  goToPlayer(player)
  {
    this.rosterService.info=player;
    console.log(player);
    this.router.navigate(["/tabs/playerInfo",player]);
  }

  goBack(){
    this.router.navigate(['./tabs/leagueOverview']);
  }

  updateStatus(players){
    this.rosterService.id=this.currentroster.rosterid;
    this.rosterService.players=players;
    // this.rosterService.players=this.currentroster.players;
    // console.log("players:"+this.rosterService.players);
    // console.log("currentrosterplayers:"+this.currentroster.players);
    this.router.navigate(["/editroster",players])
  }

}
