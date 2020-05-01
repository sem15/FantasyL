import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import {RosterService} from'../roster.service';


@Component({
  selector: 'app-playerinfo',
  templateUrl: './playerinfo.page.html',
  styleUrls: ['./playerinfo.page.scss'],
})
export class PlayerinfoPage implements OnInit {
currentplayer:any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private rosterService:RosterService) { }

  ngOnInit() {
    this.currentplayer=this.rosterService.info;
    console.log(this.currentplayer);
    this.route.params.subscribe(
      param=>{
        this.currentplayer=param;
        console.log(this.currentplayer);
      }
    )
  }

  goBack(){
    this.router.navigate(['./tabs/roster-overview']);
  }

}
