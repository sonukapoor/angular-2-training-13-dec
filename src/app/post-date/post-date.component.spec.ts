/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PostDateComponent } from './post-date.component';

describe('PostDateComponent', () => {
  let component: PostDateComponent;
  let fixture: ComponentFixture<PostDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
