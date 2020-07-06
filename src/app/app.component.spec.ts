import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'TodosTDD'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('TodosTDD');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    const app = fixture.componentInstance;
    expect(compiled.querySelector('.content span').textContent).toContain(app.title);
  });

  it(`should have as todos list 'TodosTDD'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.ngOnInit();
    app.todos$.subscribe((todos: any[]) => {
      expect(todos.length).toEqual(0);
    });
  });

  it(`should have add todo method 'TodosTDD'`, async () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.ngOnInit();
    await app.add('test');
    app.todos$.subscribe((todos: any[]) => {
      expect(todos.length).toEqual(1);
    });
  });
});
