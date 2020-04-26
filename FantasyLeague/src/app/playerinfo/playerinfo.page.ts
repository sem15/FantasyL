import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-playerinfo',
  templateUrl: './playerinfo.page.html',
  styleUrls: ['./playerinfo.page.scss'],
})
export class PlayerinfoPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goBack(){
    this.router.navigate(['./tabs/draftLobby']);
  }

}
