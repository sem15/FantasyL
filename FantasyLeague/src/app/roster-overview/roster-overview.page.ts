import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import {RosterService} from '../roster.service';
import { PlayerService } from '../player.service';
@Component({
  selector: 'app-roster-overview',
  templateUrl: './roster-overview.page.html',
  styleUrls: ['./roster-overview.page.scss'],
})
export class RosterOverviewPage implements OnInit {

  currentroster:any;
  playerlist:Array<any>=[];
  constructor(
    private router: Router,
    private rosterService: RosterService,
    private playerService: PlayerService,
    private route: ActivatedRoute
  ) {


    this.playerService.getObservable().subscribe((data) =>
    {



    })

  }

  ngOnInit() {
    this.currentroster=this.rosterService.param;
    console.log(this.rosterService.param);
    this.playerlist = this.playerService.playerlist;
    //console.log(this.playerService.playerlist);
  }

  updateStatus(players){
    this.rosterService.id=this.currentroster.id;
    // this.rosterService.players=this.currentroster.players;
    // console.log("players:"+this.rosterService.players);
    // console.log("currentrosterplayers:"+this.currentroster.players);
    this.router.navigate(["/editroster",players])
  }

}
