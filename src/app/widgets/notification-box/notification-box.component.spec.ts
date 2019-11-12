import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NotificationBoxComponent } from './notification-box.component';
import { ToggleService } from '../../services/toggle.service';

describe('Component: NotificationBox', () => {
  let component: NotificationBoxComponent;
  let fixture: ComponentFixture<NotificationBoxComponent>;

  // async beforeEach
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [ ToggleService ],
      declarations: [NotificationBoxComponent],
      imports: [
        RouterTestingModule,
      ],
    })
    .compileComponents();  // compile template and css
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => expect(component).toBeDefined() );
});
