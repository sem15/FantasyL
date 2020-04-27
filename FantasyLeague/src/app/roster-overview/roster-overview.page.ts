import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import {RosterService} from '../roster.service';
@Component({
  selector: 'app-roster-overview',
  templateUrl: './roster-overview.page.html',
  styleUrls: ['./roster-overview.page.scss'],
})
export class RosterOverviewPage implements OnInit {

  currentroster:any;
  constructor(
    private router: Router,
    private rosterService: RosterService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.currentroster=this.rosterService.param;
    console.log(this.currentroster);
    console.log(this.rosterService.param);
  }

  updateStatus(players){
    this.rosterService.id=this.currentroster.id;
    this.router.navigate(["/editroster",players])
  }

}
