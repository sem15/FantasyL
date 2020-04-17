import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DraftlobbyPage } from './draftlobby.page';

describe('DraftlobbyPage', () => {
  let component: DraftlobbyPage;
  let fixture: ComponentFixture<DraftlobbyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DraftlobbyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DraftlobbyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
