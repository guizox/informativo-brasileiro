/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { JogosDataComponent } from './jogos-data.component';

describe('JogosDataComponent', () => {
  let component: JogosDataComponent;
  let fixture: ComponentFixture<JogosDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JogosDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JogosDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
