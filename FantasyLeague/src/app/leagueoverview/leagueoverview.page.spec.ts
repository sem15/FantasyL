import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LeagueoverviewPage } from './leagueoverview.page';

describe('LeagueoverviewPage', () => {
  let component: LeagueoverviewPage;
  let fixture: ComponentFixture<LeagueoverviewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeagueoverviewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LeagueoverviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
