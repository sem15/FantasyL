import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import {PlayerService} from'../player.service';


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
    private playerService:PlayerService) { }

  ngOnInit() {
    this.currentplayer=this.playerService.param;
    console.log(this.currentplayer);
  }

  goBack(){
    this.router.navigate(['./tabs/draftLobby']);
  }

}
