import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayersTabComponent } from './players-tab.component';

describe('PlayersTabComponent', () => {
  let component: PlayersTabComponent;
  let fixture: ComponentFixture<PlayersTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayersTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayersTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
