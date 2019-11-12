import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ToggleService } from '../../services/toggle.service';
import { MenuAsideComponent } from './menu-aside.component';
import { StoreModule, Store, combineReducers } from '@ngrx/store';
import * as fromRoot from '../../reducers';
import { AvatarService } from '../../services/avatar.service';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('Component: MenuAsideComponent', () => {
  let component: MenuAsideComponent;
  let fixture: ComponentFixture<MenuAsideComponent>;
  let store: Store<fromRoot.State>;

  // async beforeEach
  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        providers: [AvatarService, ToggleService],
        declarations: [MenuAsideComponent], // declare the test component,
        imports: [
          RouterTestingModule,
          StoreModule.forRoot({
            ...fromRoot.reducers,
          }),
          NoopAnimationsModule,
        ],
      }).compileComponents(); // compile template and css
      store = TestBed.get(Store);
      spyOn(store, 'dispatch').and.callThrough();
      fixture = TestBed.createComponent(MenuAsideComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuAsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => expect(component).toBeDefined());
});
