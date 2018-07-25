import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { Observable, of } from 'rxjs';

import { TodoService } from './todo.service';
import { AppComponent } from './app.component';

class TodoServiceDummy {
  public getTodos(): Observable<any> {
    return of([]);
  }
}

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;
  let todoService: TodoService;
  const mockTodos = [
    { name: 'Todo demo' }
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        FormsModule
      ],
      providers: [
        { provide: TodoService, useClass: TodoServiceDummy }
      ]
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    todoService = TestBed.get(TodoService);
    spyOn(todoService, 'getTodos').and.returnValue(of(mockTodos));
    app = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  }));

  it('should create the app', async(() => {
    expect(app).toBeTruthy();
  }));

  it('should call getTodos', async(() => {
    expect(app.todos).toEqual(mockTodos);
  }));

  it(`should have as title 'app'`, async(() => {
    expect(app.title).toEqual('app');
  }));

  it('should render title in a h1 tag', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  }));

  describe('#addTodo', () => {
    it('should add todo in todolist', () => {
      const item = 'TODO ONE';
      app.todos = [];
      app.addTodo(item);
      expect(app.todos[0].name).toEqual(item);
    });

    it('should clean todo', () => {
      const item = 'TODO ONE';
      app.todo = item;
      app.todos = [];
      app.addTodo(item);
      expect(app.todo).toEqual('');
    });
  });
});
