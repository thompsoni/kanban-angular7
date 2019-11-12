import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TasksBoxComponent } from './tasks-box.component';
import { ToggleService } from '../../services/toggle.service';

describe('Component: TasksBox', () => {
  let component: TasksBoxComponent;
  let fixture: ComponentFixture<TasksBoxComponent>;

  // async beforeEach
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [ ToggleService ],
      declarations: [TasksBoxComponent],
      imports: [
        RouterTestingModule,
      ],
    })
    .compileComponents();  // compile template and css
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TasksBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => expect(component).toBeDefined() );
});
