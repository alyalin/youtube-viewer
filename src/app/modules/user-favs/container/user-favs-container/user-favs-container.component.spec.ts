import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFavsContainerComponent } from './user-favs-container.component';

describe('UserFavsContainerComponent', () => {
  let component: UserFavsContainerComponent;
  let fixture: ComponentFixture<UserFavsContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserFavsContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFavsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
