import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MessagesBoxComponent } from './messages-box.component';
import { ToggleService } from '../../services/toggle.service';
import { MessagesService } from '../../services/messages.service';
import { LoggerService } from '../../services/logger.service';
import { StoreModule, Store, combineReducers } from '@ngrx/store';
import * as fromRoot from '../../reducers';
import { AvatarService } from '../../services/avatar.service';

describe('Component: MessageBox', () => {
  let component: MessagesBoxComponent;
  let fixture: ComponentFixture<MessagesBoxComponent>;
  let store: Store<fromRoot.State>;

  // async beforeEach
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        AvatarService,
        ToggleService,
        MessagesService,
        LoggerService,
      ],
      declarations: [MessagesBoxComponent],
      imports: [
        RouterTestingModule,
        StoreModule.forRoot({
          ...fromRoot.reducers
        }),
      ],
    })
    .compileComponents();  // compile template and css
    store = TestBed.get(Store);
    spyOn(store, 'dispatch').and.callThrough();
    fixture = TestBed.createComponent(MessagesBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create component', () => expect(component).toBeDefined() );
});
