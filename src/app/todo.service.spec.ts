import { TestBed, inject } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { TodoService } from './todo.service';

class HttpClientDummy {
  public get(): Observable<any> {
    return of([]);
  }
}

describe('TodoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TodoService,
        { provide: HttpClient, useClass: HttpClientDummy }
      ]
    });
  });

  it('should be created', inject([TodoService], (service: TodoService) => {
    expect(service).toBeTruthy();
  }));
});
