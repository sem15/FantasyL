import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PlayerinfoPage } from './playerinfo.page';

describe('PlayerinfoPage', () => {
  let component: PlayerinfoPage;
  let fixture: ComponentFixture<PlayerinfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerinfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PlayerinfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
