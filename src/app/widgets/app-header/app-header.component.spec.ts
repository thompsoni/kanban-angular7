import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule, Store, combineReducers } from '@ngrx/store';
import { UserService } from '../../services/user.service';
import { ToggleService } from '../../services/toggle.service';
import { AppHeaderComponent } from './app-header.component';
import * as fromRoot from '../../reducers';

describe('Component: AppHeaderComponent', () => {
  let component: AppHeaderComponent;
  let fixture: ComponentFixture<AppHeaderComponent>;
  let store: Store<fromRoot.State>;

  // async beforeEach
  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        providers: [ToggleService],
        declarations: [AppHeaderComponent], // declare the test component
        imports: [
          RouterTestingModule,
          StoreModule.forRoot({
            ...fromRoot.reducers,
          }),
        ],
      }).compileComponents(); // compile template and css
    })
  );

  beforeEach(() => {
    store = TestBed.get(Store);
    spyOn(store, 'dispatch').and.callThrough();

    fixture = TestBed.createComponent(AppHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => expect(component).toBeDefined());
});
