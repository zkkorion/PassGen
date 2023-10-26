import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageSettingsComponent } from './language-settings.component';

describe('LenguageSettingsComponent', () =>
{
  let component: LanguageSettingsComponent;
  let fixture: ComponentFixture<LanguageSettingsComponent>;

  beforeEach(async () =>
  {
    await TestBed.configureTestingModule({
      declarations: [LanguageSettingsComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(LanguageSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () =>
  {
    expect(component).toBeTruthy();
  });
});
