import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RosterOverviewPage } from './roster-overview.page';

describe('RosterOverviewPage', () => {
  let component: RosterOverviewPage;
  let fixture: ComponentFixture<RosterOverviewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RosterOverviewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RosterOverviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
