import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyCampaignsPage } from './my-campaigns.page';

describe('MyCampaignsPage', () => {
  let component: MyCampaignsPage;
  let fixture: ComponentFixture<MyCampaignsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyCampaignsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyCampaignsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
