import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatsFileUploadComponent } from './chats-file-upload.component';

describe('ChatsFileUploadComponent', () => {
  let component: ChatsFileUploadComponent;
  let fixture: ComponentFixture<ChatsFileUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatsFileUploadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatsFileUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
