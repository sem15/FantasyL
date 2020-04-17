import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreateleaguePage } from './createleague.page';

describe('CreateleaguePage', () => {
  let component: CreateleaguePage;
  let fixture: ComponentFixture<CreateleaguePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateleaguePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateleaguePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
