import { InjectionToken, Type } from '@angular/core';
import { BaseComponent } from '../types/baseTest';
import { AddComponent } from '../components/main/main.component';

/**
 * Tokens for all types of providing are the same
 * Take a look in app.module.ts
 */
export const TEST_TOKEN = new InjectionToken<AddComponent<BaseComponent>>('Test injection token');
