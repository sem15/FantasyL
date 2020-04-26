import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditrosterPage } from './editroster.page';

describe('EditrosterPage', () => {
  let component: EditrosterPage;
  let fixture: ComponentFixture<EditrosterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditrosterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditrosterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
